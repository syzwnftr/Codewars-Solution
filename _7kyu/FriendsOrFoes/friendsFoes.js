function friend(friends) {
	const myFriend = [];
	friends.forEach(friend => {
		if((friend.length === 4) && /^\D+$/.test(friend)) {
			myFriend.push(friend);
		}
	});
	return myFriend;
}