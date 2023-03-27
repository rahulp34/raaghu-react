
    export const getUserConfiguration = async(login?: string) =>{

    // const response = await fetch("https://abp-mvc-raaghu.azurewebsites.net" + '/AbpUserConfiguration/GetAll');
    const response = await fetch("https://localhost:44314" + '/AbpUserConfiguration/GetAll');
        const responseObj = await response.json();

    const result = responseObj.result;
    // console.log(result);
    const permissions = result.auth.grantedPermissions;
    // console.log(permissions);
    // localStorage.setItem('storedPermissions', JSON.stringify(permissions));
    const localization = result.localization;
    const sources=result.localization.sources
    const language=result.localization.languages  
    //     if (login == 'login') {
    //       this.router.navigateByUrl('/pages/dashboard');
    //     }
    //     if (login == 'logout') {
    //       localStorage.removstareItem('storedPermissions');
    //       this.router.navigateByUrl('/login');   
}   
 

