import React from 'react'
import Logo from '../../img/ashford-logo-white.svg'
import { HashLink as Link } from 'react-router-hash-link'

const Links=()=>{
  return(
    <div className="flex flex-col mt-14 text-turquee">
      <div className="w-fit text-lg font-normal mb-2">
            <div className="cursor-pointer">
              {list_enlaces.map((item)=>(
                <ul key={item.id}>
                  <li className="flex" key={item.id}>
                    <Link key={item.id} to={item.href}>{item.description}</Link> 
                    <img className="leading-7 ml-3 hover:translate-x-6" src={"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNyAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjM5MzMgOC40OTM0MkMxNi4zMjk5IDguMzI5NzUgMTYuMjM0NyA4LjE4MDIyIDE2LjExMzMgOC4wNTM0Mkw5LjQ0NjY3IDEuMzg2NzVDOS4zMjIzNSAxLjI2MjQzIDkuMTc0NzYgMS4xNjM4MiA5LjAxMjMzIDEuMDk2NTRDOC44NDk5IDEuMDI5MjYgOC42NzU4MSAwLjk5NDYyOSA4LjUgMC45OTQ2MjlDOC4xNDQ5MyAwLjk5NDYyOSA3LjgwNDQxIDEuMTM1NjggNy41NTMzMyAxLjM4Njc1QzcuNDI5MDIgMS41MTEwNyA3LjMzMDQgMS42NTg2NiA3LjI2MzEyIDEuODIxMDlDNy4xOTU4NCAxLjk4MzUxIDcuMTYxMjEgMi4xNTc2MSA3LjE2MTIxIDIuMzMzNDJDNy4xNjEyMSAyLjY4ODQ5IDcuMzAyMjYgMy4wMjkwMSA3LjU1MzMzIDMuMjgwMDhMMTEuOTUzMyA3LjY2Njc1SDEuODMzMzNDMS40Nzk3MSA3LjY2Njc1IDEuMTQwNTcgNy44MDcyMyAwLjg5MDUyNSA4LjA1NzI4QzAuNjQwNDc2IDguMzA3MzIgMC41IDguNjQ2NDYgMC41IDkuMDAwMDhDMC41IDkuMzUzNzEgMC42NDA0NzYgOS42OTI4NCAwLjg5MDUyNSA5Ljk0Mjg5QzEuMTQwNTcgMTAuMTkyOSAxLjQ3OTcxIDEwLjMzMzQgMS44MzMzMyAxMC4zMzM0SDExLjk1MzNMNy41NTMzMyAxNC43MjAxQzcuNDI4MzYgMTQuODQ0IDcuMzI5MTcgMTQuOTkxNSA3LjI2MTQ4IDE1LjE1NEM3LjE5Mzc5IDE1LjMxNjUgNy4xNTg5NCAxNS40OTA3IDcuMTU4OTQgMTUuNjY2N0M3LjE1ODk0IDE1Ljg0MjggNy4xOTM3OSAxNi4wMTcgNy4yNjE0OCAxNi4xNzk1QzcuMzI5MTcgMTYuMzQyIDcuNDI4MzYgMTYuNDg5NSA3LjU1MzMzIDE2LjYxMzRDNy42NzcyOCAxNi43Mzg0IDcuODI0NzUgMTYuODM3NiA3Ljk4NzIzIDE2LjkwNTNDOC4xNDk3MSAxNi45NzMgOC4zMjM5OCAxNy4wMDc4IDguNSAxNy4wMDc4QzguNjc2MDIgMTcuMDA3OCA4Ljg1MDI5IDE2Ljk3MyA5LjAxMjc3IDE2LjkwNTNDOS4xNzUyNSAxNi44Mzc2IDkuMzIyNzIgMTYuNzM4NCA5LjQ0NjY3IDE2LjYxMzRMMTYuMTEzMyA5Ljk0Njc1QzE2LjIzNDcgOS44MTk5NSAxNi4zMjk5IDkuNjcwNDIgMTYuMzkzMyA5LjUwNjc1QzE2LjUyNjcgOS4xODIxNCAxNi41MjY3IDguODE4MDMgMTYuMzkzMyA4LjQ5MzQyWiIgZmlsbD0iIzNFQjFDOCIvPgo8L3N2Zz4K"}  width={12} height={12}></img>
                  </li>
                </ul>
              ))}  
            </div>
       </div>
    </div>    
  )}

  const list_enlaces=[
    {
      id:"contacto",
      description:"Contacto",
      href:"/parapacientes#codiciones_de_salud",
    },
    {
      id:"nosotros",
      description:"Sobre nosotros",
      href:"/sobrenosotros",
    },
    {
      id:"equipo",
      description:"Equipo",
      href:"/sobrenosotros#equipo",
    }
  ]

  const list_redes=[
    {
      id:"facebook",
      img:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMTIwMzUgMy4zMjAwM0gxMS4wMDA0VjAuMTQwMDNDMTAuMDkwMSAwLjA0NTM3NyA5LjE3NTUxIC0wLjAwMTM1NDI4IDguMjYwMzUgMi45ODY0MWUtMDVDNS41NDAzNSAyLjk4NjQxZS0wNSAzLjY4MDM1IDEuNjYwMDMgMy42ODAzNSA0LjcwMDAzVjcuMzIwMDNIMC42MTAzNTJWMTAuODhIMy42ODAzNVYyMEg3LjM2MDM1VjEwLjg4SDEwLjQyMDRMMTAuODgwNCA3LjMyMDAzSDcuMzYwMzVWNS4wNTAwM0M3LjM2MDM1IDQuMDAwMDMgNy42NDAzNSAzLjMyMDAzIDkuMTIwMzUgMy4zMjAwM1oiIGZpbGw9IiMwMTQyNkEiLz4KPC9zdmc+Cg==",
      href:"https://es-la.facebook.com/ashfordhospitalpr/",
      Width:12,
      Height:20
    },
    {
      id:"linkedin",
      img:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjQ2OTYgMC4wMDAxMzk4MzFIMS41Mjk1N0MxLjMzOTE1IC0wLjAwMjUwNDc5IDEuMTUwMDcgMC4wMzIzODczIDAuOTczMTM2IDAuMTAyODI0QzAuNzk2MjAxIDAuMTczMjYgMC42MzQ4NzQgMC4yNzc4NiAwLjQ5ODM2OCAwLjQxMDY1MkMwLjM2MTg2MiAwLjU0MzQ0MyAwLjI1Mjg1MiAwLjcwMTgyNCAwLjE3NzU2MiAwLjg3Njc0OUMwLjEwMjI3MyAxLjA1MTY3IDAuMDYyMTc4NyAxLjIzOTcyIDAuMDU5NTcwMyAxLjQzMDE0VjE4LjU3MDFDMC4wNjIxNzg3IDE4Ljc2MDYgMC4xMDIyNzMgMTguOTQ4NiAwLjE3NzU2MiAxOS4xMjM1QzAuMjUyODUyIDE5LjI5ODUgMC4zNjE4NjIgMTkuNDU2OCAwLjQ5ODM2OCAxOS41ODk2QzAuNjM0ODc0IDE5LjcyMjQgMC43OTYyMDEgMTkuODI3IDAuOTczMTM2IDE5Ljg5NzVDMS4xNTAwNyAxOS45Njc5IDEuMzM5MTUgMjAuMDAyOCAxLjUyOTU3IDIwLjAwMDFIMTguNDY5NkMxOC42NiAyMC4wMDI4IDE4Ljg0OTEgMTkuOTY3OSAxOS4wMjYgMTkuODk3NUMxOS4yMDI5IDE5LjgyNyAxOS4zNjQzIDE5LjcyMjQgMTkuNTAwOCAxOS41ODk2QzE5LjYzNzMgMTkuNDU2OCAxOS43NDYzIDE5LjI5ODUgMTkuODIxNiAxOS4xMjM1QzE5Ljg5NjkgMTguOTQ4NiAxOS45MzcgMTguNzYwNiAxOS45Mzk2IDE4LjU3MDFWMS40MzAxNEMxOS45MzcgMS4yMzk3MiAxOS44OTY5IDEuMDUxNjcgMTkuODIxNiAwLjg3Njc0OUMxOS43NDYzIDAuNzAxODI0IDE5LjYzNzMgMC41NDM0NDMgMTkuNTAwOCAwLjQxMDY1MkMxOS4zNjQzIDAuMjc3ODYgMTkuMjAyOSAwLjE3MzI2IDE5LjAyNiAwLjEwMjgyNEMxOC44NDkxIDAuMDMyMzg3MyAxOC42NiAtMC4wMDI1MDQ3OSAxOC40Njk2IDAuMDAwMTM5ODMxWk02LjA4OTU3IDE2Ljc0MDFIMy4wODk1N1Y3Ljc0MDE0SDYuMDg5NTdWMTYuNzQwMVpNNC41ODk1NyA2LjQ4MDE0QzQuMTc1ODMgNi40ODAxNCAzLjc3OTA0IDYuMzE1NzggMy40ODY0OCA2LjAyMzIzQzMuMTkzOTMgNS43MzA2NyAzLjAyOTU3IDUuMzMzODggMy4wMjk1NyA0LjkyMDE0QzMuMDI5NTcgNC41MDY0IDMuMTkzOTMgNC4xMDk2MSAzLjQ4NjQ4IDMuODE3MDVDMy43NzkwNCAzLjUyNDUgNC4xNzU4MyAzLjM2MDE0IDQuNTg5NTcgMy4zNjAxNEM0LjgwOTI3IDMuMzM1MjIgNS4wMzE3NSAzLjM1Njk5IDUuMjQyNDUgMy40MjQwMkM1LjQ1MzE0IDMuNDkxMDUgNS42NDczMSAzLjYwMTgzIDUuODEyMjMgMy43NDkxQzUuOTc3MTUgMy44OTYzNyA2LjEwOTEgNC4wNzY4MiA2LjE5OTQ0IDQuMjc4NjJDNi4yODk3OSA0LjQ4MDQzIDYuMzM2NDkgNC42OTkwNCA2LjMzNjQ5IDQuOTIwMTRDNi4zMzY0OSA1LjE0MTI0IDYuMjg5NzkgNS4zNTk4NSA2LjE5OTQ0IDUuNTYxNjZDNi4xMDkxIDUuNzYzNDYgNS45NzcxNSA1Ljk0MzkxIDUuODEyMjMgNi4wOTExOEM1LjY0NzMxIDYuMjM4NDUgNS40NTMxNCA2LjM0OTIzIDUuMjQyNDUgNi40MTYyNkM1LjAzMTc1IDYuNDgzMjkgNC44MDkyNyA2LjUwNTA1IDQuNTg5NTcgNi40ODAxNFpNMTYuOTA5NiAxNi43NDAxSDEzLjkwOTZWMTEuOTEwMUMxMy45MDk2IDEwLjcwMDEgMTMuNDc5NiA5LjkxMDE0IDEyLjM4OTYgOS45MTAxNEMxMi4wNTIyIDkuOTEyNjEgMTEuNzIzOCAxMC4wMTg0IDExLjQ0ODQgMTAuMjEzM0MxMS4xNzMxIDEwLjQwODIgMTAuOTY0MSAxMC42ODI4IDEwLjg0OTYgMTEuMDAwMUMxMC43NzEzIDExLjIzNTIgMTAuNzM3NCAxMS40ODI3IDEwLjc0OTYgMTEuNzMwMVYxNi43MzAxSDcuNzQ5NTdDNy43NDk1NyAxNi43MzAxIDcuNzQ5NTcgOC41NTAxNCA3Ljc0OTU3IDcuNzMwMTRIMTAuNzQ5NlY5LjAwMDE0QzExLjAyMjEgOC41MjcyNSAxMS40MTg1IDguMTM3NjYgMTEuODk2IDcuODczMzRDMTIuMzczNSA3LjYwOTAyIDEyLjkxNDEgNy40Nzk5OSAxMy40NTk2IDcuNTAwMTRDMTUuNDU5NiA3LjUwMDE0IDE2LjkwOTYgOC43OTAxNCAxNi45MDk2IDExLjU2MDFWMTYuNzQwMVoiIGZpbGw9IiMwMTQyNkEiLz4KPC9zdmc+Cg==",
      href:"https://www.linkedin.com/company/ashfordhospital/?originalSubdomain=pr",
      Width:'',
      Height:''
    },
    {
      id:"twitter",
      img:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyMCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDIuODAwMjFDMTkuMjQ4MyAzLjEyNjMgMTguNDUzNCAzLjM0MTg3IDE3LjY0IDMuNDQwMjFDMTguNDk4MiAyLjkyNzUzIDE5LjE0MTMgMi4xMjA5OSAxOS40NSAxLjE3MDIxQzE4LjY0MzYgMS42NTAyNyAxNy43NjA4IDEuOTg4NTEgMTYuODQgMi4xNzAyMUMxNi4yMjQ1IDEuNTAyNzggMTUuNDA1IDEuMDU4NTEgMTQuNTA5OCAwLjkwNzA2MUMxMy42MTQ3IDAuNzU1NjE2IDEyLjY5NDUgMC45MDU1NjggMTEuODkzOCAxLjMzMzRDMTEuMDkzIDEuNzYxMjMgMTAuNDU2OSAyLjQ0Mjc0IDEwLjA4NTIgMy4yNzEwNUM5LjcxMzU1IDQuMDk5MzUgOS42MjcyOSA1LjAyNzYgOS44NCA1LjkxMDIxQzguMjA5NDMgNS44Mjc3NCA2LjYxNDQ0IDUuNDAzMTYgNS4xNTg2NSA0LjY2NDA3QzMuNzAyODcgMy45MjQ5OCAyLjQxODg1IDIuODg3OSAxLjM5IDEuNjIwMjFDMS4wMjkxNCAyLjI1MDM4IDAuODM5NTE5IDIuOTY0MDMgMC44NCAzLjY5MDIxQzAuODM4NzIgNC4zNjQ1OSAxLjAwNDIyIDUuMDI4ODMgMS4zMjE3NiA1LjYyMzc3QzEuNjM5MjkgNi4yMTg3MiAyLjA5OTAyIDYuNzI1OTIgMi42NiA3LjEwMDIxQzIuMDA3OTggNy4wODI0NyAxLjM2OTg5IDYuOTA3NTEgMC44IDYuNTkwMjFWNi42NDAyMUMwLjgwNDg4NyA3LjU4NTEgMS4xMzU5OSA4LjQ5OTMgMS43MzczMSA5LjIyODE4QzIuMzM4NjQgOS45NTcwNSAzLjE3MzI2IDEwLjQ1NTkgNC4xIDEwLjY0MDJDMy43NDMyNiAxMC43NDg4IDMuMzcyODcgMTAuODA2IDMgMTAuODEwMkMyLjc0MTg5IDEwLjgwNzIgMi40ODQ0MiAxMC43ODM4IDIuMjMgMTAuNzQwMkMyLjQ5MzkxIDExLjU1MyAzLjAwNDYyIDEyLjI2MzQgMy42OTEwNyAxMi43NzI0QzQuMzc3NTMgMTMuMjgxNCA1LjIwNTU4IDEzLjU2MzggNi4wNiAxMy41ODAyQzQuNjE3MiAxNC43MTU1IDIuODM1ODggMTUuMzM1MSAxIDE1LjM0MDJDMC42NjU3MzUgMTUuMzQxMyAwLjMzMTczNiAxNS4zMjEzIDAgMTUuMjgwMkMxLjg3NDQzIDE2LjQ5MDUgNC4wNTg4MSAxNy4xMzI5IDYuMjkgMTcuMTMwMkM3LjgyOTY5IDE3LjE0NjIgOS4zNTcxNCAxNi44NTUyIDEwLjc4MzEgMTYuMjc0M0MxMi4yMDkxIDE1LjY5MzQgMTMuNTA1IDE0LjgzNDEgMTQuNTk1MiAxMy43NDY3QzE1LjY4NTQgMTIuNjU5MyAxNi41NDggMTEuMzY1NiAxNy4xMzI2IDkuOTQxMTJDMTcuNzE3MiA4LjUxNjYzIDE4LjAxMiA2Ljk4OTk0IDE4IDUuNDUwMjFDMTggNS4yODAyMSAxOCA1LjEwMDIxIDE4IDQuOTIwMjFDMTguNzg0NyA0LjMzNTAyIDE5LjQ2MTUgMy42MTc2MyAyMCAyLjgwMDIxWiIgZmlsbD0iIzAxNDI2QSIvPgo8L3N2Zz4K",
      href:"https://twitter.com/ashfordpr",
      Width:20,
      Height:20
    },
    {
      id:"instagram",
      img:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDcuNTJDOS41MDk1IDcuNTIgOS4wMzAwMiA3LjY2NTQ1IDguNjIyMTkgNy45Mzc5NUM4LjIxNDM1IDguMjEwNDYgNy44OTY0OCA4LjU5Nzc4IDcuNzA4NzggOS4wNTA5NUM3LjUyMTA3IDkuNTA0MTEgNy40NzE5NiAxMC4wMDI4IDcuNTY3NjUgMTAuNDgzOEM3LjY2MzM0IDEwLjk2NDkgNy44OTk1NCAxMS40MDY4IDguMjQ2MzggMTEuNzUzNkM4LjU5MzIxIDEyLjEwMDUgOS4wMzUxIDEyLjMzNjcgOS41MTYxOCAxMi40MzIzQzkuOTk3MjUgMTIuNTI4IDEwLjQ5NTkgMTIuNDc4OSAxMC45NDkxIDEyLjI5MTJDMTEuNDAyMiAxMi4xMDM1IDExLjc4OTUgMTEuNzg1NiAxMi4wNjIgMTEuMzc3OEMxMi4zMzQ2IDEwLjk3IDEyLjQ4IDEwLjQ5MDUgMTIuNDggMTBDMTIuNDggOS42NzQzMiAxMi40MTU5IDkuMzUxODMgMTIuMjkxMiA5LjA1MDk1QzEyLjE2NjYgOC43NTAwNiAxMS45ODM5IDguNDc2NjYgMTEuNzUzNiA4LjI0NjM4QzExLjUyMzMgOC4wMTYwOSAxMS4yNDk5IDcuODMzNDEgMTAuOTQ5MSA3LjcwODc4QzEwLjY0ODIgNy41ODQxNSAxMC4zMjU3IDcuNTIgMTAgNy41MlpNMTkuOTMgNS4wN0MxOS45MjQ3IDQuMjk3NzYgMTkuNzgyNSAzLjUzMjU3IDE5LjUxIDIuODFDMTkuMzA5MyAyLjI4MTI2IDE4Ljk5ODcgMS44MDEwOSAxOC41OTg4IDEuNDAxMTlDMTguMTk4OSAxLjAwMTI4IDE3LjcxODcgMC42OTA3MTggMTcuMTkgMC40OUMxNi40Njc0IDAuMjE3NDY0IDE1LjcwMjIgMC4wNzUyNjA5IDE0LjkzIDAuMDY5OTk5OUMxMy42NCAtNi43MDU1MmUtMDggMTMuMjYgMCAxMCAwQzYuNzQgMCA2LjM2IC02LjcwNTUyZS0wOCA1LjA3IDAuMDY5OTk5OUM0LjI5Nzc2IDAuMDc1MjYwOSAzLjUzMjU3IDAuMjE3NDY0IDIuODEgMC40OUMyLjI4MTI2IDAuNjkwNzE4IDEuODAxMDkgMS4wMDEyOCAxLjQwMTE5IDEuNDAxMTlDMS4wMDEyOCAxLjgwMTA5IDAuNjkwNzE4IDIuMjgxMjYgMC40OSAyLjgxQzAuMjE3NDY0IDMuNTMyNTcgMC4wNzUyNjA5IDQuMjk3NzYgMC4wNjk5OTk5IDUuMDdDLTYuNzA1NTJlLTA4IDYuMzYgMCA2Ljc0IDAgMTBDMCAxMy4yNiAtNi43MDU1MmUtMDggMTMuNjQgMC4wNjk5OTk5IDE0LjkzQzAuMDgwNzYzOSAxNS43MDUgMC4yMjI3NzQgMTYuNDcyNSAwLjQ5IDE3LjJDMC42ODk4MjggMTcuNzI2MyAxLjAwMDEzIDE4LjIwMzcgMS40IDE4LjZDMS43OTgxOSAxOS4wMDIzIDIuMjc5MzkgMTkuMzEyOSAyLjgxIDE5LjUxQzMuNTMyNTcgMTkuNzgyNSA0LjI5Nzc2IDE5LjkyNDcgNS4wNyAxOS45M0M2LjM2IDIwIDYuNzQgMjAgMTAgMjBDMTMuMjYgMjAgMTMuNjQgMjAgMTQuOTMgMTkuOTNDMTUuNzAyMiAxOS45MjQ3IDE2LjQ2NzQgMTkuNzgyNSAxNy4xOSAxOS41MUMxNy43MjA2IDE5LjMxMjkgMTguMjAxOCAxOS4wMDIzIDE4LjYgMTguNkMxOC45OTk5IDE4LjIwMzcgMTkuMzEwMiAxNy43MjYzIDE5LjUxIDE3LjJDMTkuNzgyMyAxNi40NzM5IDE5LjkyNDQgMTUuNzA1NSAxOS45MyAxNC45M0MyMCAxMy42NCAyMCAxMy4yNiAyMCAxMEMyMCA2Ljc0IDIwIDYuMzYgMTkuOTMgNS4wN1pNMTcuMzkgMTMuMDdDMTcuMzU3OSAxMy42ODcxIDE3LjIyNjIgMTQuMjk1IDE3IDE0Ljg3QzE2LjgwNTkgMTUuMzQ5NyAxNi41MTczIDE1Ljc4NTQgMTYuMTUxNCAxNi4xNTE0QzE1Ljc4NTQgMTYuNTE3MyAxNS4zNDk3IDE2LjgwNTkgMTQuODcgMTdDMTQuMjg5NSAxNy4yMTM2IDEzLjY3ODMgMTcuMzMxOCAxMy4wNiAxNy4zNUMxMi4yNyAxNy4zNSAxMi4wNiAxNy4zNSAxMCAxNy4zNUM3Ljk0IDE3LjM1IDcuNzMgMTcuMzUgNi45NCAxNy4zNUM2LjMyMTczIDE3LjMzMTggNS43MTA0OSAxNy4yMTM2IDUuMTMgMTdDNC42MzQxIDE2LjgxNTcgNC4xODYyOCAxNi41MjE3IDMuODIgMTYuMTRDMy40NTc2NyAxNS43ODEzIDMuMTc3ODQgMTUuMzQ3OSAzIDE0Ljg3QzIuNzg1NTYgMTQuMjkwMSAyLjY3MDYxIDEzLjY3ODIgMi42NiAxMy4wNkMyLjY2IDEyLjI3IDIuNjYgMTIuMDYgMi42NiAxMEMyLjY2IDcuOTQgMi42NiA3LjczIDIuNjYgNi45NEMyLjY3MDYxIDYuMzIxODMgMi43ODU1NiA1LjcwOTg4IDMgNS4xM0MzLjE4NDI4IDQuNjM0MSAzLjQ3ODI3IDQuMTg2MjggMy44NiAzLjgyQzQuMjIwMzMgMy40NTk2MiA0LjY1MzI2IDMuMTgwMDkgNS4xMyAzQzUuNzEwNDkgMi43ODY0MSA2LjMyMTczIDIuNjY4MjEgNi45NCAyLjY1QzcuNzMgMi42NSA3Ljk0IDIuNjUgMTAgMi42NUMxMi4wNiAyLjY1IDEyLjI3IDIuNjUgMTMuMDYgMi42NUMxMy42NzgzIDIuNjY4MjEgMTQuMjg5NSAyLjc4NjQxIDE0Ljg3IDNDMTUuMzY1OSAzLjE4NDI4IDE1LjgxMzcgMy40NzgyNyAxNi4xOCAzLjg2QzE2LjU0MjMgNC4yMTg3NSAxNi44MjIyIDQuNjUyMTMgMTcgNS4xM0MxNy4yMTM2IDUuNzEwNDkgMTcuMzMxOCA2LjMyMTczIDE3LjM1IDYuOTRDMTcuMzUgNy43MyAxNy4zNSA3Ljk0IDE3LjM1IDEwQzE3LjM1IDEyLjA2IDE3LjQyIDEyLjI3IDE3LjM5IDEzLjA2VjEzLjA3Wk0xNS43OSA1LjYzQzE1LjY3MDkgNS4zMDY5OCAxNS40ODMyIDUuMDEzNjQgMTUuMjM5OCA0Ljc3MDIxQzE0Ljk5NjQgNC41MjY3OCAxNC43MDMgNC4zMzkwNiAxNC4zOCA0LjIyQzEzLjkzNjUgNC4wNjYyNiAxMy40NjkzIDMuOTkxNzkgMTMgNEMxMi4yMiA0IDEyIDQgMTAgNEM4IDQgNy43OCA0IDcgNEM2LjUyODI3IDQuMDA0NjEgNi4wNjEwNyA0LjA5MjYzIDUuNjIgNC4yNkM1LjMwMTkzIDQuMzczNjYgNS4wMTE2OSA0LjU1MzcxIDQuNzY4NTggNC43ODgyQzQuNTI1NDcgNS4wMjI2OSA0LjMzNTA2IDUuMzA2MjQgNC4yMSA1LjYyQzQuMDY0NzggNi4wNjUzNyAzLjk5MzgzIDYuNTMxNiA0IDdDNCA3Ljc4IDQgOCA0IDEwQzQgMTIgNCAxMi4yMiA0IDEzQzQuMDA5OTEgMTMuNDcxMiA0LjA5Nzc3IDEzLjkzNzUgNC4yNiAxNC4zOEM0LjM3OTA2IDE0LjcwMyA0LjU2Njc4IDE0Ljk5NjQgNC44MTAyMSAxNS4yMzk4QzUuMDUzNjQgMTUuNDgzMiA1LjM0Njk4IDE1LjY3MDkgNS42NyAxNS43OUM2LjA5NjY3IDE1Ljk0NjkgNi41NDU2NSAxNi4wMzQ3IDcgMTYuMDVDNy43OCAxNi4wNSA4IDE2LjA1IDEwIDE2LjA1QzEyIDE2LjA1IDEyLjIyIDE2LjA1IDEzIDE2LjA1QzEzLjQ3MTcgMTYuMDQ1NCAxMy45Mzg5IDE1Ljk1NzQgMTQuMzggMTUuNzlDMTQuNzAzIDE1LjY3MDkgMTQuOTk2NCAxNS40ODMyIDE1LjIzOTggMTUuMjM5OEMxNS40ODMyIDE0Ljk5NjQgMTUuNjcwOSAxNC43MDMgMTUuNzkgMTQuMzhDMTUuOTU3NCAxMy45Mzg5IDE2LjA0NTQgMTMuNDcxNyAxNi4wNSAxM0MxNi4wNSAxMi4yMiAxNi4wNSAxMiAxNi4wNSAxMEMxNi4wNSA4IDE2LjA1IDcuNzggMTYuMDUgN0MxNi4wNTAzIDYuNTI3OCAxNS45NjIxIDYuMDU5NzIgMTUuNzkgNS42MlY1LjYzWk0xMCAxMy44MkM5LjQ5ODgyIDEzLjgyIDkuMDAyNTcgMTMuNzIxMSA4LjUzOTY2IDEzLjUyOUM4LjA3Njc2IDEzLjMzNjkgNy42NTYzIDEzLjA1NTQgNy4zMDIzOCAxMi43MDA1QzYuOTQ4NDYgMTIuMzQ1NyA2LjY2ODAzIDExLjkyNDUgNi40NzcxNCAxMS40NjExQzYuMjg2MjYgMTAuOTk3NyA2LjE4ODY4IDEwLjUwMTIgNi4xOSAxMEM2LjE5IDkuMjQ0MDUgNi40MTQzIDguNTA1MSA2LjgzNDQ5IDcuODc2NjlDNy4yNTQ2OCA3LjI0ODI4IDcuODUxODcgNi43NTg2NiA4LjU1MDQ3IDYuNDY5ODNDOS4yNDkwNyA2LjE4MSAxMC4wMTc3IDYuMTA1OTQgMTAuNzU4OSA2LjI1NDE1QzExLjUwMDIgNi40MDIzNiAxMi4xODA4IDYuNzY3MTcgMTIuNzE0NyA3LjMwMjQxQzEzLjI0ODUgNy44Mzc2NCAxMy42MTE2IDguNTE5MjQgMTMuNzU3OCA5LjI2MDlDMTMuOTA0MSAxMC4wMDI2IDEzLjgyNyAxMC43NzEgMTMuNTM2MyAxMS40Njg4QzEzLjI0NTcgMTIuMTY2NiAxMi43NTQ1IDEyLjc2MjUgMTIuMTI1IDEzLjE4MTFDMTEuNDk1NSAxMy41OTk2IDEwLjc1NTkgMTMuODIyIDEwIDEzLjgyWk0xNCA2LjkzQzEzLjc3ODkgNi45MDY2IDEzLjU3NDQgNi44MDIyMiAxMy40MjU3IDYuNjM2OTdDMTMuMjc3IDYuNDcxNzIgMTMuMTk0NyA2LjI1NzI5IDEzLjE5NDcgNi4wMzVDMTMuMTk0NyA1LjgxMjcxIDEzLjI3NyA1LjU5ODI4IDEzLjQyNTcgNS40MzMwM0MxMy41NzQ0IDUuMjY3NzggMTMuNzc4OSA1LjE2MzQgMTQgNS4xNEMxNC4yMjExIDUuMTYzNCAxNC40MjU2IDUuMjY3NzggMTQuNTc0MyA1LjQzMzAzQzE0LjcyMyA1LjU5ODI4IDE0LjgwNTMgNS44MTI3MSAxNC44MDUzIDYuMDM1QzE0LjgwNTMgNi4yNTcyOSAxNC43MjMgNi40NzE3MiAxNC41NzQzIDYuNjM2OTdDMTQuNDI1NiA2LjgwMjIyIDE0LjIyMTEgNi45MDY2IDE0IDYuOTNaIiBmaWxsPSIjMDE0MjZBIi8+Cjwvc3ZnPgo=",
      href:"https://www.instagram.com/ashfordhospitalpr/?hl=es",
      Width:20,
      Height:20
    }
  ]

const Internet=()=>{
  return(
       <div className="flex mt-8 -mr-4">
        {list_redes.map((item)=>(
           <div key={item.id} className="rounded-full border-c_border bg-white w-42 h-42 mx-2">
              <Link to={item.href}>
                <img className="pt-3 ml-3" src={item.img} width={item.Width} height={item.Height}></img>
              </Link>
            </div>          
        ))}
     </div>
  )}

  const list_service=[
     {
        id:"radiología",
        description:"Radiología/Centro de imágenes",
        href:"/servicios#radiologia_centro_de_imagenes"
     },
     {
      id:"cuidado_intensivo_neonatal",
      description: "Unidad de cuidado intensivo neonatal",
      href:"/especialidades#unidad_de_cuidado_intensivo_neonatal"
    },
     {
      id:"centro-de-cardiologia",
      description: "Medicina nuclear centro de cardiología",
      href:"/servicios#medicina-nuclear_centro-de-cardiologia"
    },
    {
      id:"colorrectal",
      description: "Cirugía colorrectal",
      href:"/especialidades#cirugía_colorrectal"
    },
    {
      id:"laboratory",
      description: "Laboratorio",
      href:"/servicios#laboratorio"
    },
    {
      id:"orto",
      description: "Ortopedia",
      href:"/especialidades#ortopedia"
    },
    {
      id:"física_rehabilitación",
      description: "Centro de medicina física y rehabilitación",
      href:"/servicios#centro_de_medicina_física_y_rehabilitación"
    },
    {
      id:"deportiva",
      description: "Medicina deportiva",
      href:"/especialidades#medicina_deportiva"
    },
    {
      id:"heridas",
      description: "Cuidado de heridas",
      href:"/servicios#cuidado_de_heridas"
    },
    {
      id:"otorrino",
      description: "Otorrinolaringología",
      href:"/especialidades#otorrinolaringología"
    },
    {
      id:"ashford",
      description: "Ashford Prenatal",
      href:"/servicios#ashford_prenatal"
    },
    {
      id:"endocrino",
      description: "Endocrinología",
      href:"/especialidades#endocrinología"
    },
    {
      id:"mujer",
      description: "Centro de la mujer",
      href:"/servicios#centro_de_la_mujer"
    },
    {
      id:"cgeneral",
      description: "Cirugía general",
      href:"/especialidades#cirugia_general"
    },
    {
      id:"vacunacion",
      description: "Centro de vacunación",
      href:"/servicios#centro_de_vacunacion"
    },
    {
      id:"concologica",
      description: "Cirugía oncológica",
      href:"/especialidades#cirugia_oncologica"
    },
    {
      id:"comunidad",
      description: "Farmacia de la comunidad",
      href:"/servicios#farmacia_de_la_comunidad"
    }, 
    {
      id:"pediatra",
      description: "Pediatría",
      href:"/especialidades#pediatria"
    },
    {
      id:"ginecología_oncológica",
      description: "Obstetricia, ginecología y ginecología oncológica",
      href:"/especialidades#obstetricia_ginecología_ginecología_oncológica"
    },
    {
      id:"urol",
      description: "Urología",
      href:"/especialidades#urologia"
    }
  ]

  const ListServicios=()=>{
    return(
      <div className="text-white my-8 order-2 border-0 1sm:order-3 1lg:order-2 1lg:my-0 1lg:pl-8 1lg:border-l border-c_sea">
          <div className="ml-0 1sm:ml-4">
                <p className="text-lg font-medium text-turquee mb-4">Servicios y especialidades</p>
          </div>
          <div className="grid grid-cols-1 1sm:grid-cols-2 py-1 space-y-1 w-fit">
              {list_service.map((item)=>(
                <div className="px-0 1sm:px-4" key={item.id}>
                   <Link key={item.id} to={item.href} className="hover:text-turquee font-medium text-sm">{item.description}</Link>
                </div>
              ))}
           </div>
      </div>
      
    )
  }
 
  const list_pacientes=[
    {
      id:"condiociones",
      description:"Condiciones",
      href:"/parapacientes#codiciones_de_salud",
    },
    {
      id:"directorio",
      description:"Directorio médico",
      href:"/parapacientes#directorio_medico",
    },
    {
      id:"guia",
      description:"Guía para pacientes",
      href:"/parapacientess#guia_para_pacientes",
    },
    {
      id:"admisiones",
      description:"Admisiones y pre-admisiones",
      href:"/parapacientess#admisiones_y_pre-admisiones",
    },
    {
      id:"testimonios",
      description:"Testimonios",
      href:"/parapacientes#testimonios",
    }
  ]

  const Para_Pacientes=()=>{
     return(
      <div className="flex flex-col order-3 border-0 border-c_sea my-8 1sm:order-2 1sm:px-8 1sm:my-0 1lg:order-3 lg:pr-0 sm:border-l">
         <p className="text-lg font-medium text-turquee pb-4">Para pacientes</p>
          <div className="pb-2 text-white">
               {list_pacientes.map((items)=>(
                 <ul className="py-1" key={items.id}>
                   <li className="w-fit" key={items.id}>
                     <Link to={items.href} className="hover:text-turquee font-medium text-sm" key={items.id}>{items.description}</Link>
                   </li>
                 </ul>
               ))} 
            </div>
       </div>
          
     )}

export const Footer = () => {
  return (
    <footer>
      <div className="bg-c_footer w-full" >
        <div className="w-full mx-auto pt-10 pb-0 px-4 1sm:pt-16 1sm:px-14 lg:px-28 ">
          <div className="flex flex-col flex-wrap 1sm:flex-row 1sm:justify-between 1lg:flex-nowrap">
            <div className="mb-8 1sm:mb-0 1sm:mr-8 order-1">
              <img src={Logo} width={147} height={56} alt="logo_footer"></img>
              <p className="text-lg font-medium text-white pt-8">Ashford Hospital</p>
              <p className="text-white">
                <span className="font-medium text-sm block">1451 Ave Dr Ashford,</span>
                <span className="font-medium text-sm block">00907, San Juan, Puerto Rico</span>
              </p>
              <Links />
              <Internet />
            </div>
            <ListServicios />
            <Para_Pacientes />   
          </div>
        </div>
        <div className="flex flex-col-reverse justify-between w-full max-w-8xl mx-auto py-6 px-4 1md:flex-row 1sm:px-14 1sm:pt-10 1sm:pb-6">
          <p className="items-center font-medium text-xs text-white not-italic mt-6 1md:mt-0">Copyright © 2022. Ashford Hospital</p>
          <div className="flex flex-col 1md:flex-row 1md:items-center">
            <Link to="/listadecargos" className="text-white font-medium text-xs not-italic inline-flex underline hover:text-turquee mr-0 mb-2 lg:mb-0 lg:mr-8">Lista comprensiva de cargos del Hospital Ashford</Link>
            <Link to="/politicadeprivacidad" className=" text-white font-medium text-xs not-italic underline hover:text-turquee mr-0 mb-2 1md:mb-0 1md:mr-8">Política de privacidad</Link>
            <Link to="/politicadeconflictosdeinteres" className="text-white font-medium text-xs not-italic underline hover:text-turquee mb-2 1md:mb-0 1md:mr-8">Política de conflictos de interés</Link>
          </div>
        </div>
      </div> 
    </footer>
  )
}


    