import React, { Component } from "react";
import "./Search.css";
import API from "../utils/API";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

//code to construct the components

class SearchBooks extends Component {
  state = {
    search: "",
    books: [],
    error: "",
    message: "",
  };

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    return <div></div>;
  }
}
const SearchArea = () => {
  return (
    <div className="search-area">
      <form action="">
        <input
          type="text"
          style={{ marginTop: "25px", marginRight: "5px", marginLeft: "10px" }}
        />
        <button
          className="btn btn-warning"
          type="submit"
          style={{ marginBottom: "5px", color: "white" }}
        >
          {" "}
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchArea;

//code to implement:
{
  /* <Container fluid>
<Row>
  <Col size="md-6">
    <Jumbotron>
      <h1>What Books Should I Read?</h1>
    </Jumbotron>
    <form>
      <Input
        onChange={handleInputChange}
        name="title"
        placeholder="Title (required)"
      />
      <Input
        onChange={handleInputChange}
        name="author"
        placeholder="Author (required)"
      />
      <TextArea
        onChange={handleInputChange}
        name="synopsis"
        placeholder="Synopsis (Optional)"
      />{" "}
      */
}
//       <FormBtn
//         disabled={!(formObject.author && formObject.title)}
//         onClick={handleFormSubmit}
//       >
//         Submit Book
//       </FormBtn>
//     </form>
//   </Col>
//   <Col size="md-6 sm-12">
//     <Jumbotron>
//       <h1>Books On My List</h1>
//     </Jumbotron>
//     {books.length ? (
//       <List>
//         {books.map((book) => (
//           <ListItem key={book._id}>
//             <Link to={`/books/${book._id}`}>
//               <strong>
//                 {book.title} by {book.author}
//               </strong>
//             </Link>
//             <DeleteBtn onClick={() => deleteBook(book._id)} />
//           </ListItem>
//         ))}
//       </List>
//     ) : (
//       <h3>No Results to Display</h3>
//     )}
//   </Col>
// </Row>
// </Container> */}
// function handleFormSubmit(event) {
//   event.preventDefault();
//   if (formObject.title && formObject.author) {
//     API.saveBook({
//       title: formObject.title,
//       author: formObject.author,
//       synopsis: formObject.synopsis,
//     })
//       .then(() => loadBooks())
//       .catch((err) => console.error(err));
//   }
// }
