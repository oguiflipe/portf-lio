async function fetchProfileData(){
    const url = 'https://raw.githubusercontent.com/oguiflipe/portf-lio/main/data/profile.json?token=GHSAT0AAAAAACMXP7EZK3IA5GEW42YFLZY4ZNJOAOA';
    const fetching = await fetch(url)

    return await fetching.json()
}