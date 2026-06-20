import { useEffect, useState, type FormEvent } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
  images: string[];
}

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();

  const [suggestions, setSuggestions] = useState<ProductType[]>([]);
  const location = useLocation();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      const searchParams = new URLSearchParams();
      searchParams.set("query", searchTerm.trim());

      navigate(`/search?${searchParams}`);
    }
    setSuggestions([]);
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!searchTerm.trim()) {
        setSuggestions([]);
        return;
      }
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`
        );
        const data = await res.json();
        setSuggestions(data.products.slice(0, 5));
      } catch (error) {
        console.log("error in fetching suggestions...", error);
      }
    };

    const debounce = setTimeout(() => {
      fetchSuggestions();
    }, 300);
    return () => clearTimeout(debounce);
  }, [searchTerm]);

  useEffect(() => {
    setSuggestions([]);
  }, [location]);

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="search-form flex justify-center items-center border bg-(--bg-color) border-(--main-color)"
      >
        <input
          type="text"
          name="search"
          id="search"
          className="search h-[38px] w-[440px] p-3 bg-(--bg-color) outline-none"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoComplete="off"
        />
        <button
          type="submit"
          className="cursor-pointer bg-(--main-color) h-[38px] w-[50px] flex justify-center items-center"
        >
          <FaSearch className="text-xl text-white" />
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestion absolute top-full left-0 w-full border border-(--border-color) z-50">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className="py-1.5 bg-white border-b border-b-(--border-color) last:border-b-0 hover:bg-gray-50 transition-colors"
            >
              <Link
                to={`/products/${suggestion.id}`}
                className="suggestion flex items-center justify-start gap-3 px-3"
              >
                <img
                  src={suggestion.images[0]}
                  alt=""
                  className="w-8! h-8 object-cover rounded"
                />
                <p className="text-sm font-medium text-gray-800">
                  {suggestion.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
