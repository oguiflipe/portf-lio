async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/oguiflipe/portf-lio/main/data/profile.json?token=GHSAT0AAAAAACMXP7EZHOQIWPW6NWE742R4ZNJLZRA';
    const fetching = await fetch(url)

    return await fetching.json()
}