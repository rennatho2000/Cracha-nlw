const LinksSocialMedia = {
  github: 'rennatho2000',
  youtube: 'channel/UC2Wr4VofnzpEm80Imm6H0Hw',
  facebook: 'rennatho.vasconcelos.5',
  instagram: 'rennatho_vasconcelos',
  twitter: '@rennatho2000'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
