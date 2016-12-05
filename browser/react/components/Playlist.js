import React from 'react';
import Songs from '../components/Songs';

class Playlist extends React.Component {

  // componentDidMount () {
  //   const playlistId = this.props.routeParams.playlistId;
  //   const selectPlaylist = this.props.selectPlaylist;
  //   selectPlaylist(playlistId);
  // }
  componentWillReceiveProps (nextProps) {
    const nextPlaylistId = nextProps.routeParams.playlistId;
    const currentPlaylistId = this.props.routeParams.playlistId;
    const selectPlaylist = this.props.selectPlaylist;
    if (nextPlaylistId !== currentPlaylistId)
      selectPlaylist(nextPlaylistId);
  }

  render () {
    const album = this.props.selectedAlbum;
    const currentSong = this.props.currentSong;
    const isPlaying = this.props.isPlaying;
    const toggleOne = this.props.toggleOne;

    return (
      <div>
        <h3>{ playlist.name }</h3>
        <Songs songs={playlist.songs} /> 
        { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
        <hr />
      </div>
    );
  }
}

export default Playlist;
