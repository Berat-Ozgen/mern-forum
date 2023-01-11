import { SlHome, SlLike, SlPeople } from "react-icons/sl";
import { MdTrendingUp } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../reduxHooks/storeHook";

const Sidebar: React.FC = (): JSX.Element => {
  const { userInformation } = useAppSelector((state) => state.usersData);
  const dispatch = useAppDispatch();
  return (
    <aside className="w-64 h-full">
      <div className="overflow-y-auto h-screen py-4 px-3 bg-gray-50  dark:bg-gray-800">
        <div className="flex items-center pl-2.5 mb-5">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-7"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            BrtForm
          </span>
        </div>
        <ul className="space-y-2">
          <li>
            <Link
              to={"/"}
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-5"
            >
              <SlHome size={20} />
              <span className="ml-3">Anasayfa </span>
            </Link>
          </li>
          <li>
            <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-5">
              <SlLike size={20} />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Begendiklerin
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-5">
              <SlPeople size={20} />
              <span className="flex-1 ml-3 whitespace-nowrap">
                takip ettiklerin
              </span>
            </div>
          </li>
          <li>
            <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-5">
              <MdTrendingUp size={20} />
              <span className="flex-1 ml-3 whitespace-nowrap">Trendler</span>
            </div>
          </li>
          {userInformation && (
            <li>
              <Link
                to={"/profile"}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 mb-5"
              >
                <CgProfile size={20} />
                <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
