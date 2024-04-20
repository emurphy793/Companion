import { useGlobalState } from '../../context/globalProvider';

const CategoryDropdown = () => {
  const { categories, selectedCategory, setSelectedCategory } = useGlobalState(); // Use the global state to access categories

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <select value={selectedCategory || ''} onChange={handleChange}>
      <option value="">All Categories</option>
      {categories.map((category: string, index: number) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryDropdown;