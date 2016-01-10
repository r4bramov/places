var image = { image: function () {
		return Images.findOne(this.photo);
	}
};

Template.postItem.helpers(
	image
);

Template.postPage.helpers(
	image
);