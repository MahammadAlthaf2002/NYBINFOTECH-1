export default function SearchBar({
  search,
  category,
  onSearchChange,
  onCategoryChange
}) {
  return (
    <section className="filters">
      <input
        value={search}
        placeholder="Search products..."
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <select
        value={category}
        onChange={(event) => onCategoryChange(event.target.value)}
      >
        <option>All</option>
        <option>Electronics</option>
        <option>Fashion</option>
        <option>Accessories</option>
      </select>
    </section>
  );
}
