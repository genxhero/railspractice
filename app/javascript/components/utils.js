/**
 * Creates a unique GUID on the front end for test groups.
 */

export const assignTestingGuid = () => {
    let guid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    localStorage.setItem("testGuid", guid)
    return guid;
}

export const parseGuid = (guid) => {

}