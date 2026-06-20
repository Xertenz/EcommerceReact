import type React from "react";
import { IoMenu } from "react-icons/io5";

import { FaAngleDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { HiUserAdd } from "react-icons/hi";
import "./header.scss";

type Category = {
  slug: string;
  name: string;
  url: string;
};

const navLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

const BtmHeader: React.FC = (): React.ReactNode => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isCategoryShow, setIsCategoryShown] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    setIsCategoryShown(false);
  }, [location]);

  return (
    <nav className="bg-(--main-color)">
      <div className="container mx-auto">
        <div className="wrapper flex justify-between">
          <div className="left flex gap-3">
            <div className="category-nav relative">
              <div
                className="category-btn h-full flex justify-center items-center gap-1 cursor-pointer select-none text-(--white-color) font-bold"
                onClick={() => setIsCategoryShown(!isCategoryShow)}
              >
                <IoMenu />
                <span>Browse Category</span>
                <FaAngleDown />
              </div>
              <div
                className={`category-nav-list absolute left-0 top-full bg-(--white-color) border border-[#999] border-t-0 min-w-[250px] max-h-[400px] overflow-y-auto ${
                  isCategoryShow && "active"
                } `}
              >
                <ul className="">
                  {categories.map((category) => (
                    <li key={category.slug} className="group">
                      <Link
                        to={`/category/${category.slug}`}
                        className="block py-3 ps-4 hover:ps-6 transition-all border-b border-b-(--border-color) group-last:border-b-0"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="nav-links">
              <ul className="flex justify-center items-center">
                {navLinks.map((navLink) => (
                  <li key={navLink.link}>
                    <NavLink to={navLink.link}>{navLink.title}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right flex">
            <div className="sign-regs-icons flex justify-center items-center gap-1">
              <Link
                to=""
                className="px-2! h-full flex! justify-center items-center"
              >
                <PiSignInBold />
              </Link>
              <Link
                to=""
                className="px-2! h-full flex! justify-center items-center"
              >
                <HiUserAdd />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BtmHeader;
