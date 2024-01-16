async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/oguiflipe/portf-lio/main/data/profile.json?token=GHSAT0AAAAAACMXP7EYRKCZTUL56LFQH2D6ZNF2IDQ';
    const fetching = await fetch(url)

    return await fetching.json()
}