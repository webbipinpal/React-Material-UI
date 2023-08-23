import React, { Fragment } from "react";
import Box from "@material-ui/core/Box";
import { Link } from "@material-ui/core";
import { FiSearch, FiX } from "react-icons/fi";
import Input from "@material-ui/core/Input";

const SearchField = props => {
  return (
    <Fragment>
      <form role="search" className="navbar-search">
        <Box component="div" className="position-relative">
          <Link to="javascript:void(0);" className="navbar-search-icon">
            <Box component="span" className="feather-icon">
              <FiSearch />
            </Box>
          </Link>
          <input
            type="text"
            name="example-input1-group2"
            className="form-control"
            placeholder="Type here to Search"
          />
          <Link
            id="navbar_search_close"
            className="navbar-search-close"
            onClick={props.openSearchField}
            href="#"
          >
            <Box component="span" className="feather-icon">
              <FiX />
            </Box>
          </Link>
        </Box>
      </form>
    </Fragment>
  );
};
export default SearchField;
