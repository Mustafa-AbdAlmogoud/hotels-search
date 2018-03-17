import React from 'react';
import { Route } from 'react-router-dom';

import ListHotels from './pages/list-hotels';
import SearchHotel from './pages/search-hotels/index';

const App = () => (
  <main>
    <Route exact path="/" component={SearchHotel} />
    <Route path="/hotels" component={ListHotels} />
  </main>
);

export default App;
