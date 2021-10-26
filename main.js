const linksSocialMedia = {
      github: "nagelricardo",
      youtube: "/channel/UCWzXGdB6k3cptH7yRH7odQw",
      facebook: "nagel.ricardo",
      instagram: "nagelricardo",
      twitter: "nagelric"
}

function changeSocialMedia() {
      for(let li of socialLinks.children) {
            const social = li.getAttribute('class')

            li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
      }
}

changeSocialMedia()

function getGithubProfileInfos() {
      const url = `https://api.github.com/users/${linksSocialMedia.github}`

      fetch(url)
      .then(response => response.json())
      .then(data => {
             userName.textContet = data.name
             userBio.textContet = data.bio
             userLink.href = data.html_url
             userImage.src = data.avatar_url
             userLogin.textContet = data.login
      })
}

getGithubProfileInfos()