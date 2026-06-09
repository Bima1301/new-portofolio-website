import {
  formatIdr,
  pricingData,
  productCatalogData,
} from "@/lib/gavi-data";
import { siteConfig } from "@/lib/site-config";

export default function Price() {
  return (
    <div
      className="sec-box price section-padding"
      data-scroll-index="4"
      id="daftar-produk"
    >
      <div className="sec-head mb-80">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h6 className="sub-title opacity-7 mb-15">Produk &amp; Layanan</h6>
            <h3>
              <span className="main-color">Daftar Harga</span> Jasa Digital
            </h3>
            <p className="fz-15 mt-20 opacity-8">
              Semua harga tercantum dalam{" "}
              <strong>Rupiah Indonesia (IDR)</strong>. Pemesanan melalui
              formulir kontak atau email{" "}
              <a href={`mailto:${siteConfig.email}`} className="main-color">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="product-catalog mb-80">
        <div className="table-responsive">
          <table className="product-catalog-table">
            <caption className="sr-only">
              Katalog produk dan jasa digital Yanuar Bima dengan harga IDR
            </caption>
            <thead>
              <tr>
                <th scope="col">SKU</th>
                <th scope="col">Produk / Jasa</th>
                <th scope="col">Kategori</th>
                <th scope="col">Deskripsi</th>
                <th scope="col">Harga (IDR)</th>
              </tr>
            </thead>
            <tbody>
              {productCatalogData.map((product) => (
                <tr key={product.sku}>
                  <td data-label="SKU">{product.sku}</td>
                  <td data-label="Produk">{product.name}</td>
                  <td data-label="Kategori">{product.category}</td>
                  <td data-label="Deskripsi">{product.description}</td>
                  <td data-label="Harga" className="product-price">
                    {formatIdr(product.priceIdr)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="product-catalog-note fz-13 opacity-7 mt-20">
          * Harga dapat disesuaikan setelah diskusi scope. PPN berlaku sesuai
          ketentuan perpajakan yang berlaku.
        </p>
      </div>

      <div className="sec-head mb-50">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h6 className="sub-title opacity-7 mb-15">Collaboration</h6>
            <h3>
              <span className="main-color">Flexible</span> Engagement Options
            </h3>
          </div>
        </div>
      </div>

      <div className="row md-marg">
        {pricingData.map((plan) => (
          <div key={plan.type} className="col-lg-4 valign">
            <div className="item full-width md-mb50">
              <div className="top-curv">
                <span className="left" />
                <h6 className="type">{plan.type}</h6>
                <span className="right" />
              </div>
              <div className="content">
                <div className="amount d-flex align-items-end pb-50 mb-50 bord-thin-bottom">
                  <h2 className="main-color">{plan.price}</h2>
                  <p className="ml-20 fz-20">{plan.unit}</p>
                </div>
                <div className="feat">
                  <ul className="rest">
                    {plan.features.map((f) => (
                      <li key={f}>
                        <i className="fas fa-check" /> <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center mt-50">
                  <div className="butn-presv">
                    <a
                      href="#0"
                      data-scroll-nav="5"
                      className="butn butn-md butn-bord radius-5 text-u full-width"
                    >
                      <span>Pesan / Get Started</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
