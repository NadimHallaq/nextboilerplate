import Head from "next/head";
import { Menu } from "../components/dropdown";
// import { MenuButton, MenuPopup } from "../components/droppop";
import LineButton from "../components/Buttons/lineButton";
import NavBar from "../components/NavBar";
import GridNavBar from "../components/GridNavBar";
import Pagination from "../components/Pagination";
import SimpleNavBar from "../components/SimpleNavBar";
import { Item } from "@react-stately/collections";
import Link from "next/link";
import Test from "../components/Homepage.js/test";
import { MenuItem, MenuButton } from "../components/Homepage.js/Menu";
export default function Home() {
  return (
    <div className=" h-screen bg-gray-200 items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Next-js boilerplate with:</h1>

        <Menu
          onAction={(e) => console.log("action>> ", e)}
          aria-label="Actions"
        >
          <Item key="one">One</Item>
          <Item key="two">Two</Item>
          <Item key="three">Three</Item>
        </Menu>
      </div>
      <div className="mt-4 p-4 flex justify-center">
        <MenuButton label="Actions" onAction={(e) => alert(e)}>
          <Item key="copy">Copy</Item>
          <Item key="cut">Cut</Item>
          <Item key="paste">Paste</Item>
        </MenuButton>
        <div>
          <Link href="/home">
            <a>home</a>
          </Link>
        </div>
      </div>
      <div className="mt-5" />
      <LineButton />
      <div className="mt-5" />
      <NavBar />
      <div className="mt-5" />
      <GridNavBar />
      <div className="mt-5" />
      <Pagination />
      <div className="flex justify-center" />

      <div className="mt-20" />
      <SimpleNavBar />
      <div className="mt-5" />
      <Test />
    </div>
  );
}
