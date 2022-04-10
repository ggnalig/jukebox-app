import React from 'react';
import Navbar from '../../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getTopTracks } from './../../actions/getTopTrackActions';
import { search } from './../../actions/search';

import List from '../../components/List';
import Footer from './../../components/Footer';
import Loading from '../../components/Loading';
import ErrorFallback from '../../components/ErrorFallback';

export default function TopSongs() {
  const [keyword, setKeyword] = React.useState('');
  const dispatch = useDispatch()
  const location = useLocation();

  const songLists = useSelector(state => state.tracks)
  const { loading, error, tracks, results } = songLists

  const type = location.pathname === '/top-songs' ? 'track' : 'artist'

  React.useEffect(() => {
    dispatch(getTopTracks())

    if (keyword) {
      dispatch(search(keyword, type))
    }
    
  }, [dispatch, keyword, type])
  
  return (
    <div className=''>
      <header className='sticky top-0 z-50'>
        <Navbar keyword={keyword} onChage={setKeyword} />
      </header>

      <main className="h-100 px-1 mt-2 xl:px-2 xl:mt-2 relative">
        <div className='flex flex-col justify-center align-middle'>
          <div className='my-4'>
            {loading ? <Loading /> : error.message ? <ErrorFallback /> : results.length !== 0 && keyword ? (
              <>
                <h6 className='text-xl font-semibold mb-2 mx-4'>Hasil Pencarian</h6>
                <List data={results.results.trackmatches.track} id='1' />
              </>
            ) : (
                <>
                <h6 className='text-xl font-semibold mb-2 mx-4'>Lagu teratas</h6>
                <List data={tracks.tracks.track} id='1' />
              </>
            )}
          </div>
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
