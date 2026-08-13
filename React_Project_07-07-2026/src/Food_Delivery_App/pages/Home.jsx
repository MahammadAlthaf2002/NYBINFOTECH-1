import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";

function Home() {
    const [search, setSearch] = useState("");

    // Custom Hook - debounce search
    const debouncedSearch = useDebounce(search, 500);

    // Custom Hook - fetch API
    const {
        data: foods,
        loading,
        error
    } = useFetch("https://dummyjson.com/recipes");

    // useCallback
    const handleSearch = useCallback((event) => {
        setSearch(event.target.value);
    }, []);

    // Convert API response into an array
    const foodList = useMemo(() => {
        if (Array.isArray(foods)) {
            return foods;
        }

        return foods?.recipes || [];
    }, [foods]);

    // useMemo - filter food
    const filteredFoods = useMemo(() => {
        return foodList.filter((food) =>
            food.name
                .toLowerCase()
                .includes(debouncedSearch.toLowerCase())
        );
    }, [foodList, debouncedSearch]);

    // Loading
    if (loading) {
        return (
            <div
                style={{
                    textAlign: "center",
                    padding: "50px"
                }}
            >
                <h2>Loading food...</h2>
            </div>
        );
    }

    // Error
    if (error) {
        return (
            <div
                style={{
                    textAlign: "center",
                    padding: "50px"
                }}
            >
                <h2>Something went wrong</h2>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: "#f7f7f7",
                paddingBottom: "40px"
            }}
        >

            {/* ============================= */}
            {/* HEADER */}
            {/* ============================= */}

            <div
                style={{
                    textAlign: "center",
                    padding: "30px 20px"
                }}
            >
                <h1>
                    🍔 QuickBite
                </h1>

                <p>
                    Delicious food delivered to your door
                </p>
            </div>


            {/* ============================= */}
            {/* SEARCH */}
            {/* ============================= */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "30px"
                }}
            >
                <input
                    type="text"
                    placeholder="Search food..."
                    value={search}
                    onChange={handleSearch}
                    style={{
                        width: "400px",
                        maxWidth: "90%",
                        padding: "14px 18px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        fontSize: "16px",
                        outline: "none"
                    }}
                />
            </div>


            {/* ============================= */}
            {/* FOOD SECTION */}
            {/* ============================= */}

            <div
                style={{
                    padding: "0 30px"
                }}
            >

                <h2
                    style={{
                        marginBottom: "20px"
                    }}
                >
                    {debouncedSearch
                        ? `Search results for "${debouncedSearch}"`
                        : "Popular Food"}
                </h2>


                {/* No food found */}

                {filteredFoods.length === 0 ? (

                    <div
                        style={{
                            textAlign: "center",
                            padding: "50px"
                        }}
                    >
                        <h3>
                            No food found 😔
                        </h3>

                        <p>
                            Try searching for another food.
                        </p>
                    </div>

                ) : (

                    /* ============================= */
                    /* FOOD GRID */
                    /* ============================= */

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(4, minmax(0, 1fr))",
                            gap: "25px"
                        }}
                    >

                        {filteredFoods.map((food) => (

                            /* ============================= */
                            /* FOOD CARD */
                            /* ============================= */

                            <div
                                key={food.id}
                                style={{
                                    backgroundColor: "#ffffff",
                                    border: "1px solid #e5e5e5",
                                    borderRadius: "12px",
                                    overflow: "hidden",
                                    boxShadow:
                                        "0 3px 10px rgba(0,0,0,0.08)",
                                    transition:
                                        "transform 0.2s ease"
                                }}
                            >

                                {/* Food Image */}

                                <img
                                    src={food.image}
                                    alt={food.name}
                                    style={{
                                        width: "100%",
                                        height: "190px",
                                        objectFit: "cover",
                                        display: "block"
                                    }}
                                />


                                {/* Card Content */}

                                <div
                                    style={{
                                        padding: "18px"
                                    }}
                                >

                                    {/* Food Name */}

                                    <h3
                                        style={{
                                            marginTop: "0",
                                            marginBottom: "10px"
                                        }}
                                    >
                                        {food.name}
                                    </h3>


                                    {/* Cuisine */}

                                    <p>
                                        <strong>
                                            Cuisine:
                                        </strong>{" "}
                                        {food.cuisine}
                                    </p>


                                    {/* Rating */}

                                    <p>
                                        ⭐ {food.rating}
                                    </p>


                                    {/* Meal Type */}

                                    <p>
                                        <strong>
                                            Type:
                                        </strong>{" "}
                                        {food.mealType?.join(", ")}
                                    </p>


                                    {/* Prep Time */}

                                    <p>
                                        ⏱️{" "}
                                        {food.prepTimeMinutes} minutes
                                    </p>


                                    {/* Difficulty */}

                                    <p>
                                        Difficulty:{" "}
                                        {food.difficulty}
                                    </p>


                                    {/* View Details */}

                                    <Link
                                        to={`/food/restaurant/${food.id}`}
                                        style={{
                                            display: "inline-block",
                                            marginTop: "10px",
                                            padding:
                                                "10px 15px",
                                            textDecoration:
                                                "none",
                                            borderRadius:
                                                "6px",
                                            backgroundColor:
                                                "#ff6b35",
                                            color: "white"
                                        }}
                                    >
                                        View Details
                                    </Link>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>
    );
}

export default Home;