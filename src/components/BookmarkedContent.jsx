import Heading from './UI/Heading';
import { FilmGrid } from './MainContentStyles';
import RenderResults from './RenderResults';

import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

export default function BookmarkedContent({
  heading,
  mode,
  searchTerm = undefined,
  fromSaved = false,
}) {
  const [searchParams] = useSearchParams();
  searchTerm = searchParams.get('query');
  let content;
  const state = useSelector((state) => state);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    // if (searchTerm) {
    //   setQuantity(data.pages[0].total_results);
    // }
  }, [searchTerm, fromSaved]);

  content = (
    <>
      {state[mode].length === 0 ? (
        <p>no bookmarked content yet...</p>
      ) : (
        <RenderResults el={state[mode]} fromSaved={true} />
      )}
    </>
  );
  return (
    <>
      <Heading>
        {searchTerm ? `Found ${quantity} results for ‘${searchTerm}’` : heading}
      </Heading>
      <FilmGrid>{content}</FilmGrid>
    </>
  );
}
