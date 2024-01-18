async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/oguiflipe/portf-lio/main/data/profile.json?token=GHSAT0AAAAAACMXP7EZ5DLZ5XWLU5GU5WESZNJMNIA';
    const fetching = await fetch(url)

    return await fetching.json()
}