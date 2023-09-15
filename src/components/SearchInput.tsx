import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useMovieQueryStore from "../store/MovieStore";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useMovieQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <>
      {/* <form style={{ width: '100%'}} onSubmit={(event) => { */}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) {
            setSearchText(ref.current.value);
            // setSearchParams({ q: 'active'});
            navigate(`/search/${ref.current.value}`);
          }
        }}
      >
        <InputGroup>
          <Input
            ref={ref}
            border="2px"
            borderRadius={9}
            color="white"
            placeholder="What do you want to watch?..."
            width={{ base: "90vw", lg: "400px"}}
            // variant="filled"
          />
          <InputRightElement children={<BsSearch />} />
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
