const settings = {
  "name": "blogark",
  "state": {
    "frontity": {
      "url": "https://arkademi.com",
      "title": "Arkademi Blog",
      "description": "#PastiBisa"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Kewirausahaan",
              "/category/kewirausahaan/"
            ],
            [
              "Bisnis",
              "/category/bisnis/"
            ],
            [
              "Pendidikan",
              "/category/pendidikan/"
            ],
            [
              "Update",
              "/category/artikel/"
            ],
            [
              "About Us",
              "/tentang/"
            ],
            [
              "Mitra",
              "/mitra/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://arkademi.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
