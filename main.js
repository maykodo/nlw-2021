const linksSocialMedia = {
  github: 'maykodo',
  facebook: 'ddd',
  twitter: 'ddd',
  instagram: 'ddd',
  youtube: 'ddd'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGithub.textContent = `@${data.login}`
      userGithub.href = data.html_url
      userImage.src = data.avatar_url
    })
}
getGithubProfileInfos()
