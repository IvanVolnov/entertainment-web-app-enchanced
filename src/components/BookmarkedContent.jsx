import Heading from './UI/Heading';
import { FilmGrid } from './MainContentStyles';
import RenderResults from './RenderResults';

import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { searchInString } from '../helpers/helpers';

export default function BookmarkedContent({
  heading,
  mode,
  searchTerm = undefined,
}) {
  const [searchParams] = useSearchParams();
  searchTerm = searchParams.get('query');
  let content, searchResult;
  const state = useSelector((state) => state);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (searchTerm) {
      setQuantity(searchResult.length);
    }
  }, [searchTerm, searchResult]);

  if (searchTerm) {
    const stateArr = Object.values(state).flat();
    searchResult = stateArr.filter((el) => searchInString(searchTerm, el.name));
    content = <>{<RenderResults el={searchResult} />}</>;
  } else {
    content = (
      <>
        {state[mode].length === 0 ? (
          <p>no bookmarked content yet...</p>
        ) : (
          <RenderResults el={state[mode]} />
        )}
      </>
    );
  }
  return (
    <>
      <Heading>
        {searchTerm ? `Found ${quantity} results for ‘${searchTerm}’` : heading}
      </Heading>
      <FilmGrid>{content}</FilmGrid>
    </>
  );
}
