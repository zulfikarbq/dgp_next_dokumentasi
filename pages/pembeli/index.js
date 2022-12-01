import {
  IconButton,
  InputAdornment,
  InputBase,
  OutlinedInput,
} from "@mui/material";
// import Document from "next/document";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SButton from "../../salmComponenets/Button/1.01";
import SearchIcon from "@mui/icons-material/Search";
import InventoryIcon from "@mui/icons-material/Inventory";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PaymentsIcon from "@mui/icons-material/Payments";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import WidgetsIcon from "@mui/icons-material/Widgets";
import PaymentIcon from "@mui/icons-material/Payment";

import React, { Component } from "react";

export default class Pembeli extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nano: null,
    };
  }
  render() {
    return (
      <div>
        <Head>
          <title>DGMall Syariah Help Center</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/LogoDgmall.png" />
        </Head>

        <div>
          <div>
            <div style={{ marginTop: "20px", marginLeft: "70px" }}>
              <Image src="/LogoDgmall.png" width={60} height={50} alt="logo" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <div>
                <h1>
                  Assalamualaikum,
                  <br />
                  Selamat Datang Di Help Center DGMall Syariah,
                  <br />
                  Ada yang Bisa Kami Bantu ?
                </h1>
                <div
                  style={{
                    display: "flex",
                    background: "grexy",
                    borderRadius: "50px",
                  }}
                >
                  <OutlinedInput
                    id="outlined-adornment-weight"
                    fullWidth
                    // value={values.weight}
                    // onChange={handleChange("weight")}
                    endAdornment={
                      <InputAdornment position="end">
                        <SearchIcon />
                      </InputAdornment>
                    }
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />
                </div>
              </div>
              <div>
                <Image src="/pembeli.gif" width={500} height={500} alt="logo" />
              </div>
            </div>

            <div
              style={{
                alignItems: "center",
                // background: "linear-gradient(to right, #614385, #516395)",
                borderRadius: "50px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  marginlef: "25px",
                  marginRight: "25px",
                }}
              >
                <Link href="/pembeli">
                  <SButton
                    type="button"
                    fontSize="15px"
                    radius="50px"
                    cursor="pointer"
                    bgcolor="#10856c"
                    color="white"
                    title="Pembeli"
                    padding="10px"
                    border="none"
                    paddingLeft="100px"
                    paddingRight="100px"
                  />
                </Link>
              </div>

              <div
                style={{
                  marginlef: "25px",
                  marginRight: "25px",
                }}
              >
                <Link href="./penjual">
                  <SButton
                    type="button"
                    fontSize="15px"
                    radius="50px"
                    cursor="pointer"
                    bgcolor="grey"
                    color="white"
                    title="Penjual"
                    padding="10px"
                    border="none"
                    paddingLeft="100px"
                    paddingRight="100px"
                  />
                </Link>
              </div>

              <div
                style={{
                  marginlef: "25px",
                  marginRight: "25px",
                }}
              >
                <Link href="./mitra">
                  <SButton
                    type="button"
                    fontSize="15px"
                    radius="50px"
                    cursor="pointer"
                    bgcolor="grey"
                    color="white"
                    title="Mitra"
                    padding="10px"
                    border="none"
                    paddingLeft="100px"
                    paddingRight="100px"
                  />
                </Link>
              </div>
            </div>
            <div
              style={{
                paddingLeft: 50,
                paddingRight: 50,
                border: "#10856c solid 1px",
                borderRadius: "5px",
                marginTop: "50px",
                marginLeft: 30,
                marginRight: 30,
              }}
            >
              <div>
                <h2>Kategori Pembeli</h2>
              </div>
              <div
                style={{
                  // alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "25px",
                  display: "flex",
                }}
              >
                <Link href="./pembeli/akunpembeli">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "#10856c",
                      borderRadius: "5px",
                      border: "1px solid ",
                      borderColor: "#10856c",
                      paddingLeft: 20,
                      width: 280,
                      height: 65,
                    }}
                  >
                    <div
                      style={{
                        color: "#fefefe",
                      }}
                    >
                      <AccountCircleIcon fontSize="large" />
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        color: "white",
                        paddingLeft: 20,
                      }}
                    >
                      <h4>Akun dan Kemanan</h4>
                    </div>
                  </div>
                </Link>
                <Link href="./pembeli/pesanan">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "#10856c",
                      borderRadius: "5px",
                      border: "1px solid ",
                      borderColor: "#10856c",
                      paddingLeft: 20,
                      width: 280,
                      height: 65,
                    }}
                  >
                    <div
                      style={{
                        color: "#fefefe",
                      }}
                    >
                      <InventoryIcon fontSize="large" />
                    </div>
                    <div
                      style={{
                        textAlign: "left",
                        color: "white",
                        paddingLeft: 20,
                      }}
                    >
                      <h4>Pesanan</h4>
                    </div>
                  </div>
                </Link>
                <Link href="/">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "#10856c",
                      borderRadius: "5px",
                      border: "1px solid ",
                      borderColor: "#10856c",
                      paddingLeft: 20,
                      width: 280,
                      height: 65,
                    }}
                  >
                    <div
                      style={{
                        color: "#fefefe",
                      }}
                    >
                      <PaymentIcon fontSize="large" />
                    </div>
                    <div
                      style={{
                        textAlign: "left",
                        color: "white",
                        paddingLeft: 20,
                      }}
                    >
                      <h4>Pembayaran</h4>
                    </div>
                  </div>
                </Link>
                <Link href="">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "#10856c",
                      borderRadius: "5px",
                      border: "1px solid ",
                      borderColor: "#10856c",
                      paddingLeft: 20,
                      width: 280,
                      height: 65,
                    }}
                  >
                    <div
                      style={{
                        color: "#fefefe",
                      }}
                    >
                      <LocalShippingIcon fontSize="large" />
                    </div>
                    <div
                      style={{
                        textAlign: "left",
                        color: "white",
                        paddingLeft: 20,
                      }}
                    >
                      <h4>Pengiriman</h4>
                    </div>
                  </div>
                </Link>
              </div>

              {/* BAWAH*/}
              <div
                style={{
                  // alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "25px",
                  display: "flex",
                }}
              >
                <Link href="/">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "#10856c",
                      borderRadius: "5px",
                      border: "1px solid ",
                      borderColor: "#10856c",
                      paddingLeft: 20,
                      width: 280,
                      height: 65,
                    }}
                  >
                    <div
                      style={{
                        color: "#fefefe",
                      }}
                    >
                      <PaymentsIcon fontSize="large" />
                    </div>
                    <div
                      style={{
                        textAlign: "center",
                        color: "white",
                        paddingLeft: 20,
                      }}
                    >
                      <h4>Pengembalian Dana</h4>
                    </div>
                  </div>
                </Link>
                <Link href="/">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "#10856c",
                      borderRadius: "5px",
                      border: "1px solid ",
                      borderColor: "#10856c",
                      paddingLeft: 20,
                      width: 280,
                      height: 65,
                    }}
                  >
                    <div
                      style={{
                        color: "#fefefe",
                      }}
                    >
                      <ProductionQuantityLimitsIcon fontSize="large" />
                    </div>
                    <div
                      style={{
                        textAlign: "left",
                        color: "white",
                        paddingLeft: 20,
                      }}
                    >
                      <h4>Komplain Pesanan</h4>
                    </div>
                  </div>
                </Link>
                <Link href="/">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "#10856c",
                      borderRadius: "5px",
                      border: "1px solid ",
                      borderColor: "#10856c",
                      paddingLeft: 20,
                      width: 280,
                      height: 65,
                    }}
                  >
                    <div
                      style={{
                        color: "#fefefe",
                      }}
                    >
                      <NewReleasesIcon fontSize="large" />
                    </div>
                    <div
                      style={{
                        textAlign: "left",
                        color: "white",
                        paddingLeft: 20,
                      }}
                    >
                      <h4>Seputar Promosi</h4>
                    </div>
                  </div>
                </Link>
                <Link href="/">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      background: "#10856c",
                      borderRadius: "5px",
                      border: "1px solid ",
                      borderColor: "#10856c",
                      paddingLeft: 20,
                      width: 280,
                      height: 65,
                    }}
                  >
                    <div
                      style={{
                        color: "#fefefe",
                      }}
                    >
                      <WidgetsIcon fontSize="large" />
                    </div>
                    <div
                      style={{
                        textAlign: "left",
                        color: "white",
                        paddingLeft: 20,
                      }}
                    >
                      <h4>Lainnya</h4>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "50px",
            display: "flex",
          }}
        >
          <div>
            <a
              href="https://info.dgmall.id/aboutUs"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <h3>Powered by</h3> <span className={styles.logo}></span> */}
            </a>
          </div>
          &nbsp; &nbsp; &nbsp;
          <div style={{ verticalAlign: "baseline" }}>
            <Image src="/LogoDgmall.png" alt="Logo" width={70} height={50} />
          </div>
        </div>
      </div>
    );
  }
}
