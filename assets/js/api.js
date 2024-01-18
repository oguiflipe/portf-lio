async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/oguiflipe/portf-lio/main/data/profile.json?token=GHSAT0AAAAAACMXP7EY7MGLDIGO6J4XWBGYZNJLM4Q';
    const fetching = await fetch(url)

    return await fetching.json()
}