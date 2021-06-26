export const getProfilesPosts = (state) => {
  return state.profiles.posts;
};

export const getProfilesProfile = (state) => {
  return state.profiles.profile;
};

export const getProfilesStatus = (state) => {
  return state.profiles.status;
};

export const showMyFriends = (state) => {
  let friends = state.app.myFriendsProfile;

  function shuffle(arr) {
    var j, temp;
    for (var i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

  let profile = shuffle(friends).slice(0, 4);

  return profile;
};
