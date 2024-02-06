  import { browser } from "$app/environment";
  import { MAIN_URL } from "$lib/constants/Urls";

  export function saveDataLocalStorage(jsonResponse) {
    try {
      localStorage.setItem("UserToken", jsonResponse.access_token);
      localStorage.setItem("UserRefreshToken", jsonResponse.refresh_token);
      return true;
    } catch (error) {
      return false;
    }
    
  }

  export function formatDate(inputDate) {
      const date = new Date(inputDate);

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); 
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  export async function checkSession(){

      const url = MAIN_URL + "api/v1/oauth/user/data";

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: "Bearer " + UserToken,
          },
        });

        return response;

      } catch (error) {
        console.error("Internal Server Error");
      }
  }
