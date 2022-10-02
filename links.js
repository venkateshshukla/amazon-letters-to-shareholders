
let url = "https://ir.aboutamazon.com/annual-reports-proxies-and-shareholder-letters/default.aspx";
let lst = document.querySelectorAll('a.module_link-shareholders')
for (let l of lst) {
    console.log(l.firstChild.textContent, l["href"]);
}
