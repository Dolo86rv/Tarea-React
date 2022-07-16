import React from 'react'
import Logo from '../../img/ashford-logo-white.svg'
import { HashLink as Link } from 'react-router-hash-link'

export const Footer = () => {

  return (
    <footer className="bg-c_footer w-full" >
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 w-full mb-14">
          <div className="mt-16 ml mr-0 sm:ml-10 md:ml-14">
            <img src={Logo} width={147} height={56} alt="logo_footer"></img>
            <p className="text-lg font-medium text-white pt-8">Ashford Hospital</p>
            <p className="text-white">
              <span className="font-medium text-sm block">1451 Ave Dr Ashford,</span>
              <span className="font-medium text-sm block">00907, San Juan, Puerto Rico</span>
            </p>
            <div className="mt-14 text-turquee">
              <div className="w-fit text-lg font-normal mb-2">
              <div className="flex cursor-pointer">
                <Link to="/contacto">Contacto</Link>
                <img className="leading-7 ml-3 hover:translate-x-6 " src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNyAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjM5MzMgOC40OTM0MkMxNi4zMjk5IDguMzI5NzUgMTYuMjM0NyA4LjE4MDIyIDE2LjExMzMgOC4wNTM0Mkw5LjQ0NjY3IDEuMzg2NzVDOS4zMjIzNSAxLjI2MjQzIDkuMTc0NzYgMS4xNjM4MiA5LjAxMjMzIDEuMDk2NTRDOC44NDk5IDEuMDI5MjYgOC42NzU4MSAwLjk5NDYyOSA4LjUgMC45OTQ2MjlDOC4xNDQ5MyAwLjk5NDYyOSA3LjgwNDQxIDEuMTM1NjggNy41NTMzMyAxLjM4Njc1QzcuNDI5MDIgMS41MTEwNyA3LjMzMDQgMS42NTg2NiA3LjI2MzEyIDEuODIxMDlDNy4xOTU4NCAxLjk4MzUxIDcuMTYxMjEgMi4xNTc2MSA3LjE2MTIxIDIuMzMzNDJDNy4xNjEyMSAyLjY4ODQ5IDcuMzAyMjYgMy4wMjkwMSA3LjU1MzMzIDMuMjgwMDhMMTEuOTUzMyA3LjY2Njc1SDEuODMzMzNDMS40Nzk3MSA3LjY2Njc1IDEuMTQwNTcgNy44MDcyMyAwLjg5MDUyNSA4LjA1NzI4QzAuNjQwNDc2IDguMzA3MzIgMC41IDguNjQ2NDYgMC41IDkuMDAwMDhDMC41IDkuMzUzNzEgMC42NDA0NzYgOS42OTI4NCAwLjg5MDUyNSA5Ljk0Mjg5QzEuMTQwNTcgMTAuMTkyOSAxLjQ3OTcxIDEwLjMzMzQgMS44MzMzMyAxMC4zMzM0SDExLjk1MzNMNy41NTMzMyAxNC43MjAxQzcuNDI4MzYgMTQuODQ0IDcuMzI5MTcgMTQuOTkxNSA3LjI2MTQ4IDE1LjE1NEM3LjE5Mzc5IDE1LjMxNjUgNy4xNTg5NCAxNS40OTA3IDcuMTU4OTQgMTUuNjY2N0M3LjE1ODk0IDE1Ljg0MjggNy4xOTM3OSAxNi4wMTcgNy4yNjE0OCAxNi4xNzk1QzcuMzI5MTcgMTYuMzQyIDcuNDI4MzYgMTYuNDg5NSA3LjU1MzMzIDE2LjYxMzRDNy42NzcyOCAxNi43Mzg0IDcuODI0NzUgMTYuODM3NiA3Ljk4NzIzIDE2LjkwNTNDOC4xNDk3MSAxNi45NzMgOC4zMjM5OCAxNy4wMDc4IDguNSAxNy4wMDc4QzguNjc2MDIgMTcuMDA3OCA4Ljg1MDI5IDE2Ljk3MyA5LjAxMjc3IDE2LjkwNTNDOS4xNzUyNSAxNi44Mzc2IDkuMzIyNzIgMTYuNzM4NCA5LjQ0NjY3IDE2LjYxMzRMMTYuMTEzMyA5Ljk0Njc1QzE2LjIzNDcgOS44MTk5NSAxNi4zMjk5IDkuNjcwNDIgMTYuMzkzMyA5LjUwNjc1QzE2LjUyNjcgOS4xODIxNCAxNi41MjY3IDguODE4MDMgMTYuMzkzMyA4LjQ5MzQyWiIgZmlsbD0iIzNFQjFDOCIvPgo8L3N2Zz4K" width={12} height={12}></img>
              </div>
              </div>
              <div className="w-fit text-lg font-normal mb-2">
                <div className="flex cursor-pointer">
                  <Link to="/sobrenosotros">Sobre nosotros</Link>
                  <img className="leading-7 ml-3 hover:translate-x-6 " src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNyAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjM5MzMgOC40OTM0MkMxNi4zMjk5IDguMzI5NzUgMTYuMjM0NyA4LjE4MDIyIDE2LjExMzMgOC4wNTM0Mkw5LjQ0NjY3IDEuMzg2NzVDOS4zMjIzNSAxLjI2MjQzIDkuMTc0NzYgMS4xNjM4MiA5LjAxMjMzIDEuMDk2NTRDOC44NDk5IDEuMDI5MjYgOC42NzU4MSAwLjk5NDYyOSA4LjUgMC45OTQ2MjlDOC4xNDQ5MyAwLjk5NDYyOSA3LjgwNDQxIDEuMTM1NjggNy41NTMzMyAxLjM4Njc1QzcuNDI5MDIgMS41MTEwNyA3LjMzMDQgMS42NTg2NiA3LjI2MzEyIDEuODIxMDlDNy4xOTU4NCAxLjk4MzUxIDcuMTYxMjEgMi4xNTc2MSA3LjE2MTIxIDIuMzMzNDJDNy4xNjEyMSAyLjY4ODQ5IDcuMzAyMjYgMy4wMjkwMSA3LjU1MzMzIDMuMjgwMDhMMTEuOTUzMyA3LjY2Njc1SDEuODMzMzNDMS40Nzk3MSA3LjY2Njc1IDEuMTQwNTcgNy44MDcyMyAwLjg5MDUyNSA4LjA1NzI4QzAuNjQwNDc2IDguMzA3MzIgMC41IDguNjQ2NDYgMC41IDkuMDAwMDhDMC41IDkuMzUzNzEgMC42NDA0NzYgOS42OTI4NCAwLjg5MDUyNSA5Ljk0Mjg5QzEuMTQwNTcgMTAuMTkyOSAxLjQ3OTcxIDEwLjMzMzQgMS44MzMzMyAxMC4zMzM0SDExLjk1MzNMNy41NTMzMyAxNC43MjAxQzcuNDI4MzYgMTQuODQ0IDcuMzI5MTcgMTQuOTkxNSA3LjI2MTQ4IDE1LjE1NEM3LjE5Mzc5IDE1LjMxNjUgNy4xNTg5NCAxNS40OTA3IDcuMTU4OTQgMTUuNjY2N0M3LjE1ODk0IDE1Ljg0MjggNy4xOTM3OSAxNi4wMTcgNy4yNjE0OCAxNi4xNzk1QzcuMzI5MTcgMTYuMzQyIDcuNDI4MzYgMTYuNDg5NSA3LjU1MzMzIDE2LjYxMzRDNy42NzcyOCAxNi43Mzg0IDcuODI0NzUgMTYuODM3NiA3Ljk4NzIzIDE2LjkwNTNDOC4xNDk3MSAxNi45NzMgOC4zMjM5OCAxNy4wMDc4IDguNSAxNy4wMDc4QzguNjc2MDIgMTcuMDA3OCA4Ljg1MDI5IDE2Ljk3MyA5LjAxMjc3IDE2LjkwNTNDOS4xNzUyNSAxNi44Mzc2IDkuMzIyNzIgMTYuNzM4NCA5LjQ0NjY3IDE2LjYxMzRMMTYuMTEzMyA5Ljk0Njc1QzE2LjIzNDcgOS44MTk5NSAxNi4zMjk5IDkuNjcwNDIgMTYuMzkzMyA5LjUwNjc1QzE2LjUyNjcgOS4xODIxNCAxNi41MjY3IDguODE4MDMgMTYuMzkzMyA4LjQ5MzQyWiIgZmlsbD0iIzNFQjFDOCIvPgo8L3N2Zz4K" width={12} height={12}></img>
                </div>
              </div>
              <div className="w-fit text-lg font-normal mb-2">
                <div className="flex cursor-pointer">
                  <Link to="/sobrenosotros#equipo">Equipo</Link>
                  <img className="leading-7 ml-3 hover:translate-x-6 " src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxNyAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjM5MzMgOC40OTM0MkMxNi4zMjk5IDguMzI5NzUgMTYuMjM0NyA4LjE4MDIyIDE2LjExMzMgOC4wNTM0Mkw5LjQ0NjY3IDEuMzg2NzVDOS4zMjIzNSAxLjI2MjQzIDkuMTc0NzYgMS4xNjM4MiA5LjAxMjMzIDEuMDk2NTRDOC44NDk5IDEuMDI5MjYgOC42NzU4MSAwLjk5NDYyOSA4LjUgMC45OTQ2MjlDOC4xNDQ5MyAwLjk5NDYyOSA3LjgwNDQxIDEuMTM1NjggNy41NTMzMyAxLjM4Njc1QzcuNDI5MDIgMS41MTEwNyA3LjMzMDQgMS42NTg2NiA3LjI2MzEyIDEuODIxMDlDNy4xOTU4NCAxLjk4MzUxIDcuMTYxMjEgMi4xNTc2MSA3LjE2MTIxIDIuMzMzNDJDNy4xNjEyMSAyLjY4ODQ5IDcuMzAyMjYgMy4wMjkwMSA3LjU1MzMzIDMuMjgwMDhMMTEuOTUzMyA3LjY2Njc1SDEuODMzMzNDMS40Nzk3MSA3LjY2Njc1IDEuMTQwNTcgNy44MDcyMyAwLjg5MDUyNSA4LjA1NzI4QzAuNjQwNDc2IDguMzA3MzIgMC41IDguNjQ2NDYgMC41IDkuMDAwMDhDMC41IDkuMzUzNzEgMC42NDA0NzYgOS42OTI4NCAwLjg5MDUyNSA5Ljk0Mjg5QzEuMTQwNTcgMTAuMTkyOSAxLjQ3OTcxIDEwLjMzMzQgMS44MzMzMyAxMC4zMzM0SDExLjk1MzNMNy41NTMzMyAxNC43MjAxQzcuNDI4MzYgMTQuODQ0IDcuMzI5MTcgMTQuOTkxNSA3LjI2MTQ4IDE1LjE1NEM3LjE5Mzc5IDE1LjMxNjUgNy4xNTg5NCAxNS40OTA3IDcuMTU4OTQgMTUuNjY2N0M3LjE1ODk0IDE1Ljg0MjggNy4xOTM3OSAxNi4wMTcgNy4yNjE0OCAxNi4xNzk1QzcuMzI5MTcgMTYuMzQyIDcuNDI4MzYgMTYuNDg5NSA3LjU1MzMzIDE2LjYxMzRDNy42NzcyOCAxNi43Mzg0IDcuODI0NzUgMTYuODM3NiA3Ljk4NzIzIDE2LjkwNTNDOC4xNDk3MSAxNi45NzMgOC4zMjM5OCAxNy4wMDc4IDguNSAxNy4wMDc4QzguNjc2MDIgMTcuMDA3OCA4Ljg1MDI5IDE2Ljk3MyA5LjAxMjc3IDE2LjkwNTNDOS4xNzUyNSAxNi44Mzc2IDkuMzIyNzIgMTYuNzM4NCA5LjQ0NjY3IDE2LjYxMzRMMTYuMTEzMyA5Ljk0Njc1QzE2LjIzNDcgOS44MTk5NSAxNi4zMjk5IDkuNjcwNDIgMTYuMzkzMyA5LjUwNjc1QzE2LjUyNjcgOS4xODIxNCAxNi41MjY3IDguODE4MDMgMTYuMzkzMyA4LjQ5MzQyWiIgZmlsbD0iIzNFQjFDOCIvPgo8L3N2Zz4K" width={12} height={12}></img>
                </div>  
              </div>
            </div>
            <div className="flex relative my-7 pl-0">
              <div className="rounded-full border-c_border mx-0 bg-white w-11 h-11" >
                <a href="https://es-la.facebook.com/ashfordhospitalpr/">
                  <img className="pt-3 ml-4" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAxMSAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMTIwMzUgMy4zMjAwM0gxMS4wMDA0VjAuMTQwMDNDMTAuMDkwMSAwLjA0NTM3NyA5LjE3NTUxIC0wLjAwMTM1NDI4IDguMjYwMzUgMi45ODY0MWUtMDVDNS41NDAzNSAyLjk4NjQxZS0wNSAzLjY4MDM1IDEuNjYwMDMgMy42ODAzNSA0LjcwMDAzVjcuMzIwMDNIMC42MTAzNTJWMTAuODhIMy42ODAzNVYyMEg3LjM2MDM1VjEwLjg4SDEwLjQyMDRMMTAuODgwNCA3LjMyMDAzSDcuMzYwMzVWNS4wNTAwM0M3LjM2MDM1IDQuMDAwMDMgNy42NDAzNSAzLjMyMDAzIDkuMTIwMzUgMy4zMjAwM1oiIGZpbGw9IiMwMTQyNkEiLz4KPC9zdmc+Cg==" width={11} height={20}></img>
                </a>
              </div>
              <div>
                <div className="rounded-full border-c_border mx-4 bg-white w-11 h-11">
                  <a href="https://www.linkedin.com/company/ashfordhospital/?originalSubdomain=pr">
                    <img className="pt-3 ml-3" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjQ2OTYgMC4wMDAxMzk4MzFIMS41Mjk1N0MxLjMzOTE1IC0wLjAwMjUwNDc5IDEuMTUwMDcgMC4wMzIzODczIDAuOTczMTM2IDAuMTAyODI0QzAuNzk2MjAxIDAuMTczMjYgMC42MzQ4NzQgMC4yNzc4NiAwLjQ5ODM2OCAwLjQxMDY1MkMwLjM2MTg2MiAwLjU0MzQ0MyAwLjI1Mjg1MiAwLjcwMTgyNCAwLjE3NzU2MiAwLjg3Njc0OUMwLjEwMjI3MyAxLjA1MTY3IDAuMDYyMTc4NyAxLjIzOTcyIDAuMDU5NTcwMyAxLjQzMDE0VjE4LjU3MDFDMC4wNjIxNzg3IDE4Ljc2MDYgMC4xMDIyNzMgMTguOTQ4NiAwLjE3NzU2MiAxOS4xMjM1QzAuMjUyODUyIDE5LjI5ODUgMC4zNjE4NjIgMTkuNDU2OCAwLjQ5ODM2OCAxOS41ODk2QzAuNjM0ODc0IDE5LjcyMjQgMC43OTYyMDEgMTkuODI3IDAuOTczMTM2IDE5Ljg5NzVDMS4xNTAwNyAxOS45Njc5IDEuMzM5MTUgMjAuMDAyOCAxLjUyOTU3IDIwLjAwMDFIMTguNDY5NkMxOC42NiAyMC4wMDI4IDE4Ljg0OTEgMTkuOTY3OSAxOS4wMjYgMTkuODk3NUMxOS4yMDI5IDE5LjgyNyAxOS4zNjQzIDE5LjcyMjQgMTkuNTAwOCAxOS41ODk2QzE5LjYzNzMgMTkuNDU2OCAxOS43NDYzIDE5LjI5ODUgMTkuODIxNiAxOS4xMjM1QzE5Ljg5NjkgMTguOTQ4NiAxOS45MzcgMTguNzYwNiAxOS45Mzk2IDE4LjU3MDFWMS40MzAxNEMxOS45MzcgMS4yMzk3MiAxOS44OTY5IDEuMDUxNjcgMTkuODIxNiAwLjg3Njc0OUMxOS43NDYzIDAuNzAxODI0IDE5LjYzNzMgMC41NDM0NDMgMTkuNTAwOCAwLjQxMDY1MkMxOS4zNjQzIDAuMjc3ODYgMTkuMjAyOSAwLjE3MzI2IDE5LjAyNiAwLjEwMjgyNEMxOC44NDkxIDAuMDMyMzg3MyAxOC42NiAtMC4wMDI1MDQ3OSAxOC40Njk2IDAuMDAwMTM5ODMxWk02LjA4OTU3IDE2Ljc0MDFIMy4wODk1N1Y3Ljc0MDE0SDYuMDg5NTdWMTYuNzQwMVpNNC41ODk1NyA2LjQ4MDE0QzQuMTc1ODMgNi40ODAxNCAzLjc3OTA0IDYuMzE1NzggMy40ODY0OCA2LjAyMzIzQzMuMTkzOTMgNS43MzA2NyAzLjAyOTU3IDUuMzMzODggMy4wMjk1NyA0LjkyMDE0QzMuMDI5NTcgNC41MDY0IDMuMTkzOTMgNC4xMDk2MSAzLjQ4NjQ4IDMuODE3MDVDMy43NzkwNCAzLjUyNDUgNC4xNzU4MyAzLjM2MDE0IDQuNTg5NTcgMy4zNjAxNEM0LjgwOTI3IDMuMzM1MjIgNS4wMzE3NSAzLjM1Njk5IDUuMjQyNDUgMy40MjQwMkM1LjQ1MzE0IDMuNDkxMDUgNS42NDczMSAzLjYwMTgzIDUuODEyMjMgMy43NDkxQzUuOTc3MTUgMy44OTYzNyA2LjEwOTEgNC4wNzY4MiA2LjE5OTQ0IDQuMjc4NjJDNi4yODk3OSA0LjQ4MDQzIDYuMzM2NDkgNC42OTkwNCA2LjMzNjQ5IDQuOTIwMTRDNi4zMzY0OSA1LjE0MTI0IDYuMjg5NzkgNS4zNTk4NSA2LjE5OTQ0IDUuNTYxNjZDNi4xMDkxIDUuNzYzNDYgNS45NzcxNSA1Ljk0MzkxIDUuODEyMjMgNi4wOTExOEM1LjY0NzMxIDYuMjM4NDUgNS40NTMxNCA2LjM0OTIzIDUuMjQyNDUgNi40MTYyNkM1LjAzMTc1IDYuNDgzMjkgNC44MDkyNyA2LjUwNTA1IDQuNTg5NTcgNi40ODAxNFpNMTYuOTA5NiAxNi43NDAxSDEzLjkwOTZWMTEuOTEwMUMxMy45MDk2IDEwLjcwMDEgMTMuNDc5NiA5LjkxMDE0IDEyLjM4OTYgOS45MTAxNEMxMi4wNTIyIDkuOTEyNjEgMTEuNzIzOCAxMC4wMTg0IDExLjQ0ODQgMTAuMjEzM0MxMS4xNzMxIDEwLjQwODIgMTAuOTY0MSAxMC42ODI4IDEwLjg0OTYgMTEuMDAwMUMxMC43NzEzIDExLjIzNTIgMTAuNzM3NCAxMS40ODI3IDEwLjc0OTYgMTEuNzMwMVYxNi43MzAxSDcuNzQ5NTdDNy43NDk1NyAxNi43MzAxIDcuNzQ5NTcgOC41NTAxNCA3Ljc0OTU3IDcuNzMwMTRIMTAuNzQ5NlY5LjAwMDE0QzExLjAyMjEgOC41MjcyNSAxMS40MTg1IDguMTM3NjYgMTEuODk2IDcuODczMzRDMTIuMzczNSA3LjYwOTAyIDEyLjkxNDEgNy40Nzk5OSAxMy40NTk2IDcuNTAwMTRDMTUuNDU5NiA3LjUwMDE0IDE2LjkwOTYgOC43OTAxNCAxNi45MDk2IDExLjU2MDFWMTYuNzQwMVoiIGZpbGw9IiMwMTQyNkEiLz4KPC9zdmc+Cg=="></img>
                  </a>
                </div>
              </div>
              <div>
                <div className="rounded-full border-c_border mx-0 bg-white w-11 h-11">
                  <a href="https://twitter.com/ashfordpr">
                    <img  className="pt-3 ml-3" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAyMCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwIDIuODAwMjFDMTkuMjQ4MyAzLjEyNjMgMTguNDUzNCAzLjM0MTg3IDE3LjY0IDMuNDQwMjFDMTguNDk4MiAyLjkyNzUzIDE5LjE0MTMgMi4xMjA5OSAxOS40NSAxLjE3MDIxQzE4LjY0MzYgMS42NTAyNyAxNy43NjA4IDEuOTg4NTEgMTYuODQgMi4xNzAyMUMxNi4yMjQ1IDEuNTAyNzggMTUuNDA1IDEuMDU4NTEgMTQuNTA5OCAwLjkwNzA2MUMxMy42MTQ3IDAuNzU1NjE2IDEyLjY5NDUgMC45MDU1NjggMTEuODkzOCAxLjMzMzRDMTEuMDkzIDEuNzYxMjMgMTAuNDU2OSAyLjQ0Mjc0IDEwLjA4NTIgMy4yNzEwNUM5LjcxMzU1IDQuMDk5MzUgOS42MjcyOSA1LjAyNzYgOS44NCA1LjkxMDIxQzguMjA5NDMgNS44Mjc3NCA2LjYxNDQ0IDUuNDAzMTYgNS4xNTg2NSA0LjY2NDA3QzMuNzAyODcgMy45MjQ5OCAyLjQxODg1IDIuODg3OSAxLjM5IDEuNjIwMjFDMS4wMjkxNCAyLjI1MDM4IDAuODM5NTE5IDIuOTY0MDMgMC44NCAzLjY5MDIxQzAuODM4NzIgNC4zNjQ1OSAxLjAwNDIyIDUuMDI4ODMgMS4zMjE3NiA1LjYyMzc3QzEuNjM5MjkgNi4yMTg3MiAyLjA5OTAyIDYuNzI1OTIgMi42NiA3LjEwMDIxQzIuMDA3OTggNy4wODI0NyAxLjM2OTg5IDYuOTA3NTEgMC44IDYuNTkwMjFWNi42NDAyMUMwLjgwNDg4NyA3LjU4NTEgMS4xMzU5OSA4LjQ5OTMgMS43MzczMSA5LjIyODE4QzIuMzM4NjQgOS45NTcwNSAzLjE3MzI2IDEwLjQ1NTkgNC4xIDEwLjY0MDJDMy43NDMyNiAxMC43NDg4IDMuMzcyODcgMTAuODA2IDMgMTAuODEwMkMyLjc0MTg5IDEwLjgwNzIgMi40ODQ0MiAxMC43ODM4IDIuMjMgMTAuNzQwMkMyLjQ5MzkxIDExLjU1MyAzLjAwNDYyIDEyLjI2MzQgMy42OTEwNyAxMi43NzI0QzQuMzc3NTMgMTMuMjgxNCA1LjIwNTU4IDEzLjU2MzggNi4wNiAxMy41ODAyQzQuNjE3MiAxNC43MTU1IDIuODM1ODggMTUuMzM1MSAxIDE1LjM0MDJDMC42NjU3MzUgMTUuMzQxMyAwLjMzMTczNiAxNS4zMjEzIDAgMTUuMjgwMkMxLjg3NDQzIDE2LjQ5MDUgNC4wNTg4MSAxNy4xMzI5IDYuMjkgMTcuMTMwMkM3LjgyOTY5IDE3LjE0NjIgOS4zNTcxNCAxNi44NTUyIDEwLjc4MzEgMTYuMjc0M0MxMi4yMDkxIDE1LjY5MzQgMTMuNTA1IDE0LjgzNDEgMTQuNTk1MiAxMy43NDY3QzE1LjY4NTQgMTIuNjU5MyAxNi41NDggMTEuMzY1NiAxNy4xMzI2IDkuOTQxMTJDMTcuNzE3MiA4LjUxNjYzIDE4LjAxMiA2Ljk4OTk0IDE4IDUuNDUwMjFDMTggNS4yODAyMSAxOCA1LjEwMDIxIDE4IDQuOTIwMjFDMTguNzg0NyA0LjMzNTAyIDE5LjQ2MTUgMy42MTc2MyAyMCAyLjgwMDIxWiIgZmlsbD0iIzAxNDI2QSIvPgo8L3N2Zz4K" width={20} height={18}></img>
                  </a>
                </div>
              </div>
              <div>
                <div className="rounded-full border-c_border ml-4 bg-white w-11 h-11">
                  <a href="https://www.instagram.com/ashfordhospitalpr/?hl=es">
                    <img className="pt-3 ml-3 items-center" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDcuNTJDOS41MDk1IDcuNTIgOS4wMzAwMiA3LjY2NTQ1IDguNjIyMTkgNy45Mzc5NUM4LjIxNDM1IDguMjEwNDYgNy44OTY0OCA4LjU5Nzc4IDcuNzA4NzggOS4wNTA5NUM3LjUyMTA3IDkuNTA0MTEgNy40NzE5NiAxMC4wMDI4IDcuNTY3NjUgMTAuNDgzOEM3LjY2MzM0IDEwLjk2NDkgNy44OTk1NCAxMS40MDY4IDguMjQ2MzggMTEuNzUzNkM4LjU5MzIxIDEyLjEwMDUgOS4wMzUxIDEyLjMzNjcgOS41MTYxOCAxMi40MzIzQzkuOTk3MjUgMTIuNTI4IDEwLjQ5NTkgMTIuNDc4OSAxMC45NDkxIDEyLjI5MTJDMTEuNDAyMiAxMi4xMDM1IDExLjc4OTUgMTEuNzg1NiAxMi4wNjIgMTEuMzc3OEMxMi4zMzQ2IDEwLjk3IDEyLjQ4IDEwLjQ5MDUgMTIuNDggMTBDMTIuNDggOS42NzQzMiAxMi40MTU5IDkuMzUxODMgMTIuMjkxMiA5LjA1MDk1QzEyLjE2NjYgOC43NTAwNiAxMS45ODM5IDguNDc2NjYgMTEuNzUzNiA4LjI0NjM4QzExLjUyMzMgOC4wMTYwOSAxMS4yNDk5IDcuODMzNDEgMTAuOTQ5MSA3LjcwODc4QzEwLjY0ODIgNy41ODQxNSAxMC4zMjU3IDcuNTIgMTAgNy41MlpNMTkuOTMgNS4wN0MxOS45MjQ3IDQuMjk3NzYgMTkuNzgyNSAzLjUzMjU3IDE5LjUxIDIuODFDMTkuMzA5MyAyLjI4MTI2IDE4Ljk5ODcgMS44MDEwOSAxOC41OTg4IDEuNDAxMTlDMTguMTk4OSAxLjAwMTI4IDE3LjcxODcgMC42OTA3MTggMTcuMTkgMC40OUMxNi40Njc0IDAuMjE3NDY0IDE1LjcwMjIgMC4wNzUyNjA5IDE0LjkzIDAuMDY5OTk5OUMxMy42NCAtNi43MDU1MmUtMDggMTMuMjYgMCAxMCAwQzYuNzQgMCA2LjM2IC02LjcwNTUyZS0wOCA1LjA3IDAuMDY5OTk5OUM0LjI5Nzc2IDAuMDc1MjYwOSAzLjUzMjU3IDAuMjE3NDY0IDIuODEgMC40OUMyLjI4MTI2IDAuNjkwNzE4IDEuODAxMDkgMS4wMDEyOCAxLjQwMTE5IDEuNDAxMTlDMS4wMDEyOCAxLjgwMTA5IDAuNjkwNzE4IDIuMjgxMjYgMC40OSAyLjgxQzAuMjE3NDY0IDMuNTMyNTcgMC4wNzUyNjA5IDQuMjk3NzYgMC4wNjk5OTk5IDUuMDdDLTYuNzA1NTJlLTA4IDYuMzYgMCA2Ljc0IDAgMTBDMCAxMy4yNiAtNi43MDU1MmUtMDggMTMuNjQgMC4wNjk5OTk5IDE0LjkzQzAuMDgwNzYzOSAxNS43MDUgMC4yMjI3NzQgMTYuNDcyNSAwLjQ5IDE3LjJDMC42ODk4MjggMTcuNzI2MyAxLjAwMDEzIDE4LjIwMzcgMS40IDE4LjZDMS43OTgxOSAxOS4wMDIzIDIuMjc5MzkgMTkuMzEyOSAyLjgxIDE5LjUxQzMuNTMyNTcgMTkuNzgyNSA0LjI5Nzc2IDE5LjkyNDcgNS4wNyAxOS45M0M2LjM2IDIwIDYuNzQgMjAgMTAgMjBDMTMuMjYgMjAgMTMuNjQgMjAgMTQuOTMgMTkuOTNDMTUuNzAyMiAxOS45MjQ3IDE2LjQ2NzQgMTkuNzgyNSAxNy4xOSAxOS41MUMxNy43MjA2IDE5LjMxMjkgMTguMjAxOCAxOS4wMDIzIDE4LjYgMTguNkMxOC45OTk5IDE4LjIwMzcgMTkuMzEwMiAxNy43MjYzIDE5LjUxIDE3LjJDMTkuNzgyMyAxNi40NzM5IDE5LjkyNDQgMTUuNzA1NSAxOS45MyAxNC45M0MyMCAxMy42NCAyMCAxMy4yNiAyMCAxMEMyMCA2Ljc0IDIwIDYuMzYgMTkuOTMgNS4wN1pNMTcuMzkgMTMuMDdDMTcuMzU3OSAxMy42ODcxIDE3LjIyNjIgMTQuMjk1IDE3IDE0Ljg3QzE2LjgwNTkgMTUuMzQ5NyAxNi41MTczIDE1Ljc4NTQgMTYuMTUxNCAxNi4xNTE0QzE1Ljc4NTQgMTYuNTE3MyAxNS4zNDk3IDE2LjgwNTkgMTQuODcgMTdDMTQuMjg5NSAxNy4yMTM2IDEzLjY3ODMgMTcuMzMxOCAxMy4wNiAxNy4zNUMxMi4yNyAxNy4zNSAxMi4wNiAxNy4zNSAxMCAxNy4zNUM3Ljk0IDE3LjM1IDcuNzMgMTcuMzUgNi45NCAxNy4zNUM2LjMyMTczIDE3LjMzMTggNS43MTA0OSAxNy4yMTM2IDUuMTMgMTdDNC42MzQxIDE2LjgxNTcgNC4xODYyOCAxNi41MjE3IDMuODIgMTYuMTRDMy40NTc2NyAxNS43ODEzIDMuMTc3ODQgMTUuMzQ3OSAzIDE0Ljg3QzIuNzg1NTYgMTQuMjkwMSAyLjY3MDYxIDEzLjY3ODIgMi42NiAxMy4wNkMyLjY2IDEyLjI3IDIuNjYgMTIuMDYgMi42NiAxMEMyLjY2IDcuOTQgMi42NiA3LjczIDIuNjYgNi45NEMyLjY3MDYxIDYuMzIxODMgMi43ODU1NiA1LjcwOTg4IDMgNS4xM0MzLjE4NDI4IDQuNjM0MSAzLjQ3ODI3IDQuMTg2MjggMy44NiAzLjgyQzQuMjIwMzMgMy40NTk2MiA0LjY1MzI2IDMuMTgwMDkgNS4xMyAzQzUuNzEwNDkgMi43ODY0MSA2LjMyMTczIDIuNjY4MjEgNi45NCAyLjY1QzcuNzMgMi42NSA3Ljk0IDIuNjUgMTAgMi42NUMxMi4wNiAyLjY1IDEyLjI3IDIuNjUgMTMuMDYgMi42NUMxMy42NzgzIDIuNjY4MjEgMTQuMjg5NSAyLjc4NjQxIDE0Ljg3IDNDMTUuMzY1OSAzLjE4NDI4IDE1LjgxMzcgMy40NzgyNyAxNi4xOCAzLjg2QzE2LjU0MjMgNC4yMTg3NSAxNi44MjIyIDQuNjUyMTMgMTcgNS4xM0MxNy4yMTM2IDUuNzEwNDkgMTcuMzMxOCA2LjMyMTczIDE3LjM1IDYuOTRDMTcuMzUgNy43MyAxNy4zNSA3Ljk0IDE3LjM1IDEwQzE3LjM1IDEyLjA2IDE3LjQyIDEyLjI3IDE3LjM5IDEzLjA2VjEzLjA3Wk0xNS43OSA1LjYzQzE1LjY3MDkgNS4zMDY5OCAxNS40ODMyIDUuMDEzNjQgMTUuMjM5OCA0Ljc3MDIxQzE0Ljk5NjQgNC41MjY3OCAxNC43MDMgNC4zMzkwNiAxNC4zOCA0LjIyQzEzLjkzNjUgNC4wNjYyNiAxMy40NjkzIDMuOTkxNzkgMTMgNEMxMi4yMiA0IDEyIDQgMTAgNEM4IDQgNy43OCA0IDcgNEM2LjUyODI3IDQuMDA0NjEgNi4wNjEwNyA0LjA5MjYzIDUuNjIgNC4yNkM1LjMwMTkzIDQuMzczNjYgNS4wMTE2OSA0LjU1MzcxIDQuNzY4NTggNC43ODgyQzQuNTI1NDcgNS4wMjI2OSA0LjMzNTA2IDUuMzA2MjQgNC4yMSA1LjYyQzQuMDY0NzggNi4wNjUzNyAzLjk5MzgzIDYuNTMxNiA0IDdDNCA3Ljc4IDQgOCA0IDEwQzQgMTIgNCAxMi4yMiA0IDEzQzQuMDA5OTEgMTMuNDcxMiA0LjA5Nzc3IDEzLjkzNzUgNC4yNiAxNC4zOEM0LjM3OTA2IDE0LjcwMyA0LjU2Njc4IDE0Ljk5NjQgNC44MTAyMSAxNS4yMzk4QzUuMDUzNjQgMTUuNDgzMiA1LjM0Njk4IDE1LjY3MDkgNS42NyAxNS43OUM2LjA5NjY3IDE1Ljk0NjkgNi41NDU2NSAxNi4wMzQ3IDcgMTYuMDVDNy43OCAxNi4wNSA4IDE2LjA1IDEwIDE2LjA1QzEyIDE2LjA1IDEyLjIyIDE2LjA1IDEzIDE2LjA1QzEzLjQ3MTcgMTYuMDQ1NCAxMy45Mzg5IDE1Ljk1NzQgMTQuMzggMTUuNzlDMTQuNzAzIDE1LjY3MDkgMTQuOTk2NCAxNS40ODMyIDE1LjIzOTggMTUuMjM5OEMxNS40ODMyIDE0Ljk5NjQgMTUuNjcwOSAxNC43MDMgMTUuNzkgMTQuMzhDMTUuOTU3NCAxMy45Mzg5IDE2LjA0NTQgMTMuNDcxNyAxNi4wNSAxM0MxNi4wNSAxMi4yMiAxNi4wNSAxMiAxNi4wNSAxMEMxNi4wNSA4IDE2LjA1IDcuNzggMTYuMDUgN0MxNi4wNTAzIDYuNTI3OCAxNS45NjIxIDYuMDU5NzIgMTUuNzkgNS42MlY1LjYzWk0xMCAxMy44MkM5LjQ5ODgyIDEzLjgyIDkuMDAyNTcgMTMuNzIxMSA4LjUzOTY2IDEzLjUyOUM4LjA3Njc2IDEzLjMzNjkgNy42NTYzIDEzLjA1NTQgNy4zMDIzOCAxMi43MDA1QzYuOTQ4NDYgMTIuMzQ1NyA2LjY2ODAzIDExLjkyNDUgNi40NzcxNCAxMS40NjExQzYuMjg2MjYgMTAuOTk3NyA2LjE4ODY4IDEwLjUwMTIgNi4xOSAxMEM2LjE5IDkuMjQ0MDUgNi40MTQzIDguNTA1MSA2LjgzNDQ5IDcuODc2NjlDNy4yNTQ2OCA3LjI0ODI4IDcuODUxODcgNi43NTg2NiA4LjU1MDQ3IDYuNDY5ODNDOS4yNDkwNyA2LjE4MSAxMC4wMTc3IDYuMTA1OTQgMTAuNzU4OSA2LjI1NDE1QzExLjUwMDIgNi40MDIzNiAxMi4xODA4IDYuNzY3MTcgMTIuNzE0NyA3LjMwMjQxQzEzLjI0ODUgNy44Mzc2NCAxMy42MTE2IDguNTE5MjQgMTMuNzU3OCA5LjI2MDlDMTMuOTA0MSAxMC4wMDI2IDEzLjgyNyAxMC43NzEgMTMuNTM2MyAxMS40Njg4QzEzLjI0NTcgMTIuMTY2NiAxMi43NTQ1IDEyLjc2MjUgMTIuMTI1IDEzLjE4MTFDMTEuNDk1NSAxMy41OTk2IDEwLjc1NTkgMTMuODIyIDEwIDEzLjgyWk0xNCA2LjkzQzEzLjc3ODkgNi45MDY2IDEzLjU3NDQgNi44MDIyMiAxMy40MjU3IDYuNjM2OTdDMTMuMjc3IDYuNDcxNzIgMTMuMTk0NyA2LjI1NzI5IDEzLjE5NDcgNi4wMzVDMTMuMTk0NyA1LjgxMjcxIDEzLjI3NyA1LjU5ODI4IDEzLjQyNTcgNS40MzMwM0MxMy41NzQ0IDUuMjY3NzggMTMuNzc4OSA1LjE2MzQgMTQgNS4xNEMxNC4yMjExIDUuMTYzNCAxNC40MjU2IDUuMjY3NzggMTQuNTc0MyA1LjQzMzAzQzE0LjcyMyA1LjU5ODI4IDE0LjgwNTMgNS44MTI3MSAxNC44MDUzIDYuMDM1QzE0LjgwNTMgNi4yNTcyOSAxNC43MjMgNi40NzE3MiAxNC41NzQzIDYuNjM2OTdDMTQuNDI1NiA2LjgwMjIyIDE0LjIyMTEgNi45MDY2IDE0IDYuOTNaIiBmaWxsPSIjMDE0MjZBIi8+Cjwvc3ZnPgo=" width={20} height={20}></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-2 justify-center text-white mt-16 ml-4 pl-8 border-l border-c_sea">
              <div className="col-span-2">
                 <p className="text-2xl font-medium text-turquee pb-4">Servicios y especialidades</p>
              </div>
             <div className="grid grid-cols-1 md:grid-cols-2 md:col-start-1 gap-1">
               <div className="py-1 hover:text-turquee font-medium text-sm">
                  <Link to="" >Radiología/Centro de imágenes</Link>
                </div>
                <div className="py-1 hover:text-turquee font-medium text-sm">
                <Link to="">Unidad de cuidado intensivo neonatal</Link>
                </div>
                <div className="py-1 hover:text-turquee font-medium text-sm ">
                  <Link to="">Medicina nuclear y centro de cardiología</Link>
                </div> 
                <div className="py-1 hover:text-turquee font-medium text-sm ">
                <Link to="">Cirugía colorrectal</Link>
                </div > 
                <div className="py-1 hover:text-turquee font-medium text-sm">
                  <Link to="">Laboratorio</Link>
                </div> 
                <div className="py-1 hover:text-turquee font-medium text-sm">
                <Link to="">Ortopedia</Link>
               </div> 
               <div className="pb-1 hover:text-turquee font-medium text-sm">
                  <Link to="">Centro de medicina física y rehabilitación</Link>
               </div>
               <div className="py-1 hover:text-turquee font-medium text-sm pl-1">
                <Link to="">Medicina deportiva</Link>
              </div>
              <div className="py-1 hover:text-turquee font-medium text-sm">
                  <Link to="">Cuidado de heridas</Link>
                </div>
                <div className="py-1 hover:text-turquee font-medium text-sm pl-1">
                <Link to="">Otorrinolaringologia</Link>
              </div>
              <div className="py-1 hover:text-turquee font-medium text-sm">
                  <Link to="">Ashford Prenatal</Link>
                </div> 
                <div className="py-1 hover:text-turquee font-medium text-sm pl-1">
                <Link to="">Endocrinología</Link>
              </div>
              <div className="py-1 hover:text-turquee font-medium text-sm">
                  <Link to="">Centro de la mujer</Link>
              </div>
              <div className="py-1 hover:text-turquee font-medium text-sm pl-1">
                <Link to="">Cirugía general</Link>
              </div> 
              <div className="pb-1 hover:text-turquee font-medium text-sm">
                  <Link to="">Centro de vacunación</Link>
                </div>
                <div className="py-1 hover:text-turquee font-medium text-sm pl-1">
                <Link to="">Cirugía oncológica</Link>
              </div> 
              <div className="py-1 hover:text-turquee font-medium text-sm">
                  <Link to="">Farmacia de la comunidad</Link>
                </div> 
                <div className="py-1 hover:text-turquee font-medium text-sm pl-1">
                <Link to="">Pediatría</Link>
              </div> 
              <div className="py-1 hover:text-turquee font-medium text-sm pl-1">
                <Link to="">Urología</Link>
              </div>
              <div className="py-1 hover:text-turquee font-medium text-sm">
                  <Link to="">Obstetricia, ginecología y ginecología oncológica</Link>
                </div>     
           </div>
          </div>
          
          <div className="mt-16 border-0 border-c_sea pl-8 sm:ml-2 md:ml-2 md:border-l">
            <p className="text-2xl font-medium text-turquee pb-4">Para pacientes</p>
            <div className="flex flex-col text-white">
              <div className="pb-2">
                <Link to="/" className="hover:text-turquee font-medium text-sm">Condiciones</Link>
              </div>
              <div className="pb-2">
                <Link to="/" className="hover:text-turquee font-medium text-sm">Directorio médico</Link>
              </div>
              <div className="pb-2">
                <Link to="/" className="hover:text-turquee font-medium text-sm">Guía para pacientes</Link>
              </div>
              <div className="pb-2">
                <Link to="/" className="hover:text-turquee font-medium text-sm">Admisiones y pre-admisiones</Link>
              </div>
              <div className="pb-2">
                <Link to="/" className="hover:text-turquee font-medium text-sm">Testimonios</Link>
              </div>
            </div>
          </div>
          <div className="w-full text-white ml-14 mt-2 text-xs font-medium">
            <p>Copyright © 2022. Ashford Hospital</p>
          </div> 
          <div className="col-span-3 ml-96 text-xs text-white pt-2 font-medium">
              <a href="" className=" underline hover:text-turquee"><span className="mr-4">Lista comprensiva de cargos del Hospital Ashford</span></a>
              <a href="" className="underline hover:text-turquee"><span className="mr-4 ">Política de privacidad</span></a>
              <a href="" className="underline hover:text-turquee"><span className="mr-4 ">Política de conflictos de interés</span></a>  
          </div>
      </div> 
      
      
    </footer>
  )
}


/*
                
               
                
                

                
                
                
                
               
                      
              
             
              
              
              
              
              
              
              
              
               */