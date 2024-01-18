async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/oguiflipe/portf-lio/main/data/profile.json?token=GHSAT0AAAAAACMXP7EZKUPJSZWZSTS2BVYSZNJK76Q';
    const fetching = await fetch(url)

    return await fetching.json()
}