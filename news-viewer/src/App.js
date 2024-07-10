import NewsList from "./NewsList";
import Categories from "./Categories";
import {useCallback, useState} from "react";
import {Route,Routes} from 'react-router-dom';
import NewsPage from "./NewsPage";


const App = () => {
    // const [category,setCategory] = useState('all');
    // const onSelect = useCallback(category=>setCategory(category),[]);
    //
    // return (
    //     <>
    //         <Categories category={category} onSelect={onSelect}/>
    //         <NewsList category={category}/>
    //     </>
    //     );
    return (
      <Routes>
        <Route path="/" element={<NewsPage/>}/>
          <Route path="/:category" element={<NewsPage/>}/>
      </Routes>
    );
};

export default App;
