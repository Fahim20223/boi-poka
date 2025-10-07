import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../Utility/addToDB_temp";
import Book from "../Book/Book";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <Tabs>
        <TabList>
          <Tab>Read-Book List</Tab>
          <Tab>MY Wish-List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I Read {readList.length}</h2>
          {readList.map((b) => (
            <Book key={b.bookId} book={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Wish I List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
