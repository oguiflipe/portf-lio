async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/oguiflipe/portf-lio/main/data/profile.json?token=GHSAT0AAAAAACMXP7EZ3CBA5LBPZEBV2C4AZNJKSBQ';
    const fetching = await fetch(url)

    return await fetching.json()
}