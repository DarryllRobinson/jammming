// Spotify has not yet made it to South Africa so I have had to hardcode some of the expected responses
const clientId = 'clientId';
const redirectUri = 'http://localhost:3000/';

class Spotify() {
  getAccessToken(userToken) {
    if (userToken) {
      return userToken;
    } else {
      const spotifyUrl = 'https://example.com/callback#access_token=NwAExzBV3O2Tk&token_type=Bearer&expires_in=3600&state=123';
      const reToken = /access_token=([^&]*)/;
      const reExpires = /expires_in=([^&]*)/;

      // searching for the token
      const accessTokenMatch = spotifyUrl.match(reToken);
      const expiresInMatch = spotifyUrl.match(reExpires);
      // need to set the token to expire at expiresIn  ****************** Step 80

      if (accessTokenMatch && expiresInMatch) {
        const accessToken = accessTokenMatch[1];
        let expiresIn = Number(expiresInMatch[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return accessToken;
      } else {
        window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      }
  }

  search(searchTerm) {
    console.log('searchTerm: ', searchTerm);

    // I have to hardcode the response
    /*async function getData(){
      try {
        let response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, {headers: {Authorization: `Bearer ${accessToken}`}
        });
        if (response.ok) {
          //  ****************** Step 87
          let jsonResponse = await response.json();

          const tracks = JSON.parse(spotifyResponse);
          console.log("tracks: ", tracks);
          return tracks();
        }
        throw new Error('Request failed!');
      } catch (error) {
        console.log(error);
      }
    }*/

    // Hardcoded response
    const spotifyResponse = {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu"
          },
          "href" : "https://api.spotify.com/v1/artists/0C0XlULifJtAgn6ZNCW2eu",
          "id" : "0C0XlULifJtAgn6ZNCW2eu",
          "name" : "The Killers",
          "type" : "artist",
          "uri" : "spotify:artist:0C0XlULifJtAgn6ZNCW2eu"
        } ],
        "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "UY" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/4OHNH3sDzIxnmUADXzv2kT"
        },
        "href" : "https://api.spotify.com/v1/albums/4OHNH3sDzIxnmUADXzv2kT",
        "id" : "4OHNH3sDzIxnmUADXzv2kT",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ac68a9e4a867ec3ce8249cd90a2d7c73755fb487",
          "width" : 629
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/d0186ad64df7d6fc5f65c20c7d16f4279ffeb815",
          "width" : 295
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/7c3ec33d478f5f517eeb5339c2f75f150e4d601e",
          "width" : 63
        } ],
        "name" : "Hot Fuss (Deluxe Version)",
        "type" : "album",
        "uri" : "spotify:album:4OHNH3sDzIxnmUADXzv2kT"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/0C0XlULifJtAgn6ZNCW2eu"
        },
        "href" : "https://api.spotify.com/v1/artists/0C0XlULifJtAgn6ZNCW2eu",
        "id" : "0C0XlULifJtAgn6ZNCW2eu",
        "name" : "The Killers",
        "type" : "artist",
        "uri" : "spotify:artist:0C0XlULifJtAgn6ZNCW2eu"
      } ],
      "available_markets" : [ "AD", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "CH", "CL", "CO", "CR", "CY", "CZ", "DE", "DK", "DO", "EC", "EE", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IS", "IT", "JP", "LI", "LT", "LU", "LV", "MC", "MT", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PL", "PT", "PY", "SE", "SG", "SK", "SV", "TR", "TW", "UY" ],
      "disc_number" : 1,
      "duration_ms" : 222200,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBFFP0300052"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp"
      },
      "href" : "https://api.spotify.com/v1/tracks/3n3Ppam7vgaVa1iaRUc9Lp",
      "id" : "3n3Ppam7vgaVa1iaRUc9Lp",
      "name" : "Mr. Brightside",
      "popularity" : 73,
      "preview_url" : "https://p.scdn.co/mp3-preview/4839b070015ab7d6de9fec1756e1f3096d908fba",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:3n3Ppam7vgaVa1iaRUc9Lp"
    };

    const tracks = JSON.parse(spotifyResponse);
    console.log("tracks: ", tracks);
    return tracks();
  }

  savePlaylist(playlistName, trackArray) {
    if (playlistName && trackArray) {
      const accessToken = this.accessToken;
      const headers = {Authorization: `Bearer ${accessToken}`};
      const userId = '';

      // Get user ID from Spotify
      // I have to hardcode the response
      /*async function getData(){
        try {
          let response = await fetch(`https://api.spotify.com/v1/me`, {headers: {Authorization: `Bearer ${accessToken}`}});
          if (response.ok) {
            // I have to hardcode the response ****************** Step 92
            //let jsonResponse = await response.json();

            const retrieveUser = {
              "birthdate": "1937-06-01",
              "country": "SE",
              "display_name": "JM Wizzler",
              "email": "email@example.com",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/wizzler"
              },
              "followers" : {
                "href" : null,
                "total" : 3829
              },
              "href": "https://api.spotify.com/v1/users/wizzler",
              "id": "wizzler",
              "images": [
                {
                  "height": null,
                  "url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1.0-1/1970403_10152215092574354_1798272330_n.jpg",
                  "width": null
                }
              ],
              "product": "premium",
              "type": "user",
              "uri": "spotify:user:wizzler"
            };
            const user = JSON.parse(retrieveUser);
            userId = user[id];
            //console.log("Spotify search");*/

            const retrieveUser = {
              "birthdate": "1937-06-01",
              "country": "SE",
              "display_name": "JM Wizzler",
              "email": "email@example.com",
              "external_urls": {
                "spotify": "https://open.spotify.com/user/wizzler"
              },
              "followers" : {
                "href" : null,
                "total" : 3829
              },
              "href": "https://api.spotify.com/v1/users/wizzler",
              "id": "wizzler",
              "images": [
                {
                  "height": null,
                  "url": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/t1.0-1/1970403_10152215092574354_1798272330_n.jpg",
                  "width": null
                }
              ],
              "product": "premium",
              "type": "user",
              "uri": "spotify:user:wizzler"
            };
            const user = JSON.parse(retrieveUser);
            userId = user[id];

            // POST new playlist to Spotify
            // I have to hardcode the response
            /*try {
              async function getData(){
              try {
                let response = await fetch(`/v1/users/{user_id}/playlists`, {
                  headers: {Authorization: `Bearer ${accessToken}`},
                  method: 'POST',
                  body: JSON.stringify({name: name})
                });
                if (response.ok) {
                  //  ****************** Step 93
                  let jsonResponse = await response.json();

                  const createPlaylist = {
                    "collaborative": false,
                    "description": null,
                    "external_urls": {
                      "spotify": "http://open.spotify.com/user/thelinmichael/playlist/7d2D2S200NyUE5KYs80PwO"
                    },
                    "followers": {
                      "href": null,
                      "total": 0
                    },
                    "href": "https://api.spotify.com/v1/users/thelinmichael/playlists/7d2D2S200NyUE5KYs80PwO",
                    "id": "7d2D2S200NyUE5KYs80PwO",
                    "images": [ ],
                    "name": "A New Playlist",
                    "owner": {
                      "external_urls": {
                        "spotify": "http://open.spotify.com/user/thelinmichael"
                      },
                      "href": "https://api.spotify.com/v1/users/thelinmichael",
                      "id": "thelinmichael",
                      "type": "user",
                      "uri": "spotify:user:thelinmichael"
                    },
                    "public": false,
                    "snapshot_id": "s0o3TSuYnRLl2jch+oA4OEbKwq/fNxhGBkSPnvhZdmWjNV0q3uCAWuGIhEx8SHIx",
                    "tracks": {
                      "href": "https://api.spotify.com/v1/users/thelinmichael/playlists/7d2D2S200NyUE5KYs80PwO/tracks",
                      "items": [ ],
                      "limit": 100,
                      "next": null,
                      "offset": 0,
                      "previous": null,
                      "total": 0
                    },
                    "type": "playlist",
                    "uri": "spotify:user:thelinmichael:playlist:7d2D2S200NyUE5KYs80PwO"
                  };
                  const playlist = JSON.parse(createPlaylist);
                  //console.log("Spotify createPlaylist");
                  const playlistId = playlist[id];*/
                  const createPlaylist = {
                    "collaborative": false,
                    "description": null,
                    "external_urls": {
                      "spotify": "http://open.spotify.com/user/thelinmichael/playlist/7d2D2S200NyUE5KYs80PwO"
                    },
                    "followers": {
                      "href": null,
                      "total": 0
                    },
                    "href": "https://api.spotify.com/v1/users/thelinmichael/playlists/7d2D2S200NyUE5KYs80PwO",
                    "id": "7d2D2S200NyUE5KYs80PwO",
                    "images": [ ],
                    "name": "A New Playlist",
                    "owner": {
                      "external_urls": {
                        "spotify": "http://open.spotify.com/user/thelinmichael"
                      },
                      "href": "https://api.spotify.com/v1/users/thelinmichael",
                      "id": "thelinmichael",
                      "type": "user",
                      "uri": "spotify:user:thelinmichael"
                    },
                    "public": false,
                    "snapshot_id": "s0o3TSuYnRLl2jch+oA4OEbKwq/fNxhGBkSPnvhZdmWjNV0q3uCAWuGIhEx8SHIx",
                    "tracks": {
                      "href": "https://api.spotify.com/v1/users/thelinmichael/playlists/7d2D2S200NyUE5KYs80PwO/tracks",
                      "items": [ ],
                      "limit": 100,
                      "next": null,
                      "offset": 0,
                      "previous": null,
                      "total": 0
                    },
                    "type": "playlist",
                    "uri": "spotify:user:thelinmichael:playlist:7d2D2S200NyUE5KYs80PwO"
                  };
                  const playlist = JSON.parse(createPlaylist);
                  //console.log("Spotify createPlaylist");
                  const playlistId = playlist[id];

                  // POST tracks to the new playlist
                  /*try {
                    async function getData(){
                    try {
                      let response = await fetch(`/v1/users/{user_id}/playlists/{playlist_id}/tracks`, {
                        headers: {Authorization: `Bearer ${accessToken}`},
                        method: 'POST',
                        body: JSON.stringify({uris: trackArray})
                      });
                      if (response.ok) {
                        // I have to hardcode the response ****************** Step 94
                        let jsonResponse = await response.json();

                        const addTracks = {
                          "snapshot_id" : "JbtmHBDBAYu3/bt8BOXKjzKx3i0b6LCa/wVjyl6qQ2Yf6nFXkbmzuEa+ZI/U1yF+"
                        };
                        const playlist = JSON.parse(createPlaylist);
                        //console.log("Spotify addTracks");
                        const playlistId = playlist[id];*/

                        const addTracks = {
                          "snapshot_id" : "JbtmHBDBAYu3/bt8BOXKjzKx3i0b6LCa/wVjyl6qQ2Yf6nFXkbmzuEa+ZI/U1yF+"
                        };
                        const playlist = JSON.parse(createPlaylist);
                        //console.log("Spotify addTracks");
                        const playlistId = playlist[id];

                /*}
                throw new Error('Request failed!');
              } catch (error) {
                console.log(error);
              }
            }
          }
          throw new Error('Request failed!');
        } catch (error) {
          console.log(error);
        }
      }*/

    } else {
      return;
    }
  }

}

export default Spotify;
