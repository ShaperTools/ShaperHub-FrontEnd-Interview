// adapted from https://shaper-takehome.s3.amazonaws.com/projects.json

const projects = [
  {
    id: "5ee877591f3a3e0010b4041e",
    creator: "Josh Worley",
    creatorId: "5d40a6c44cd4190017a54e94",
    creatorImage: {
      url:
        "https://projects-shapercdn-com.imgix.net/users/5d40a6c44cd4190017a54e94/profile/e9f4e510-aafd-11ea-b4a2-b726cf6eca88?fit=crop&fm=pjpg&auto=compress&dpr=2&ar=1&crop=faces%2Cedges%2Centropy",
    },
    title: "Candle Holder",
    image: {
      url:
        "https://projects-shapercdn-com.imgix.net/shares/images/9462a9a0-afa5-11ea-90ee-334aac3d6ff9",
    },
    createdDate: "2020-06-16T07:40:09.008Z",
  },
  {
    id: "5ee0a68e1f3a3e0010b0f3be",
    creator: "Jonas Winkler",
    creatorId: "5e171dceb21490000fcf37ef",
    creatorImage: {
      url:
        "https://projects-shapercdn-com.imgix.net/users/5e171dceb21490000fcf37ef/profile/5ca6cc10-afe8-11ea-b4a2-b726cf6eca88?fit=crop&fm=pjpg&auto=compress&dpr=2&ar=1&crop=faces%2Cedges%2Centropy",
    },
    title: "Stock Chair",
    image: {
      url:
        "https://projects-shapercdn-com.imgix.net/shares/images/f1bbee80-aafb-11ea-b9c6-b9ffaf3022ed",
    },
    createdDate: "2020-06-10T09:23:26.051Z",
  },
  {
    id: "5e8f683e239cba0012eed3e9",
    creatorName: "Thor ter Kulve",
    creatorId: "5ee8ea90ff93e9000fd0c492",
    creatorImage: {
      url:
        "https://projects-shapercdn-com.imgix.net/users/5ee8ea90ff93e9000fd0c492/profile/5ecaf9b0-afea-11ea-b4a2-b726cf6eca88?fit=crop&fm=pjpg&auto=compress&dpr=2&ar=1&crop=faces%2Cedges%2Centropy",
    },
    title: "Shop Stool",
    image: {
      url:
        "https://projects-shapercdn-com.imgix.net/shares/images/5d563c60-aafa-11ea-b9c6-b9ffaf3022ed",
    },
    createdDate: "2020-04-09T18:23:58.544Z",
  },
  {
    id: "5ee01fcb1f3a3e0010b0d53f",
    creator: "Thor ter Kulve",
    creatorId: "5ee8ea90ff93e9000fd0c492",
    creatorImage: {
      url:
        "https://projects-shapercdn-com.imgix.net/users/5ee8ea90ff93e9000fd0c492/profile/5ecaf9b0-afea-11ea-b4a2-b726cf6eca88?fit=crop&fm=pjpg&auto=compress&dpr=2&ar=1&crop=faces%2Cedges%2Centropy",
    },
    title: "Bundle Trestle",
    image: {
      url:
        "https://projects-shapercdn-com.imgix.net/shares/images/544c0a50-ab59-11ea-90ee-334aac3d6ff9",
    },
    createdDate: "2020-06-09T23:48:27.857Z",
  },
  {
    id: "5e8f6468239cba0012eed3d0",
    creator: "Jonas Winkler",
    creatorId: "5e171dceb21490000fcf37ef",
    creatorImage: {
      url:
        "https://projects-shapercdn-com.imgix.net/users/5e171dceb21490000fcf37ef/profile/5ca6cc10-afe8-11ea-b4a2-b726cf6eca88?fit=crop&fm=pjpg&auto=compress&dpr=2&ar=1&crop=faces%2Cedges%2Centropy",
    },
    title: "Lattice Lamp",
    image: {
      url:
        "https://projects-shapercdn-com.imgix.net/shares/images/70305300-b0f6-11ea-979a-73a5b3a6ef4e",
    },
    createdDate: "2020-06-02T21:32:33.000Z",
  },
  {
    _id: "5ee8751b1f3a3e0010b402b4",
    creator: "Josh Worley",
    creatorId: "5d40a6c44cd4190017a54e94",
    creatorImage: {
      url:
        "https://projects-shapercdn-com.imgix.net/users/5d40a6c44cd4190017a54e94/profile/e9f4e510-aafd-11ea-b4a2-b726cf6eca88?fit=crop&fm=pjpg&auto=compress&dpr=2&ar=1&crop=faces%2Cedges%2Centropy",
    },
    title: "Hex Mats",
    image: {
      url:
        "https://projects-shapercdn-com.imgix.net/shares/images/867dc1a0-afa3-11ea-b9c6-b9ffaf3022ed",
    },
    createdDate: "2020-06-16T07:30:35.559Z",
  },
  {
    _id: "5ee0a7a94e47230010dd9659",
    creator: "Jonas Winkler",
    creatorId: "5e171dceb21490000fcf37ef",
    creatorImage: {
      url:
        "https://projects-shapercdn-com.imgix.net/users/5e171dceb21490000fcf37ef/profile/5ca6cc10-afe8-11ea-b4a2-b726cf6eca88?fit=crop&fm=pjpg&auto=compress&dpr=2&ar=1&crop=faces%2Cedges%2Centropy",
    },
    title: "Tool Cabinet",
    image: {
      url:
        "https://projects-shapercdn-com.imgix.net/shares/images/9ea05690-aafc-11ea-90ee-334aac3d6ff9",
    },
    createdDate: "2020-06-10T09:28:09.005Z",
  },
  {
    _id: "5eb917e85b43a60012156fca",
    creator: "Noah Berkowitz-Mitchell",
    creatorId: "59bbcf2b291ebbfa71254b61",
    creatorImage: {
      url:
        "https://projects-shapercdn-com.imgix.net/users/59bbcf2b291ebbfa71254b61/profile/1cd22620-5a09-11e8-9162-41f130857655?fit=crop&fm=pjpg&auto=compress&dpr=2&ar=1&crop=faces%2Cedges%2Centropy",
    },
    title: "Pen Tray",
    image: {
      url:
        "https://projects-shapercdn-com.imgix.net/shares/images/51d8fba0-aaa2-11ea-90ee-334aac3d6ff9",
    },
    createdDate: "2020-06-02T20:39:32.762Z",
  },
  {
    _id: "5ee0a8a21f3a3e0010b0f437",
    creator: "Philip Morley",
    creatorId: "5eea9060dce2f37ef547a181",
    creatorImage: {
      url:
        "https://projects-shapercdn-com.imgix.net/users/5eea9060dce2f37ef547a181/profile/d0aea540-b0e4-11ea-b4a2-b726cf6eca88?fit=crop&fm=pjpg&auto=compress&dpr=2&ar=1&crop=faces%2Cedges%2Centropy",
    },
    title: "Coffee Rack",
    image: {
      url:
        "https://projects-shapercdn-com.imgix.net/shares/images/346e40b0-aafd-11ea-b9c6-b9ffaf3022ed",
    },
    createdDate: "2020-06-10T09:32:18.514Z",
  },
];

export default projects;
