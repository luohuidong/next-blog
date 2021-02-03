import React from "react";
import Head from "next/head";

export default function PostPrismCDN() {
  return (
    <Head>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js"
        integrity="sha512-YBk7HhgDZvBxmtOfUdvX0z8IH2d10Hp3aEygaMNhtF8fSOvBZ16D/1bXZTJV6ndk/L/DlXxYStP8jrF77v2MIg=="
        crossOrigin="anonymous"
        defer
      ></script>

      {/* 自动加载必要语言 */}
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/autoloader/prism-autoloader.min.js"
        integrity="sha512-zc7WDnCM3aom2EziyDIRAtQg1mVXLdILE09Bo+aE1xk0AM2c2cVLfSW9NrxE5tKTX44WBY0Z2HClZ05ur9vB6A=="
        crossOrigin="anonymous"
        defer
      ></script>

      {/* 配置主题 */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-tomorrow.min.css"
        integrity="sha512-vswe+cgvic/XBoF1OcM/TeJ2FW0OofqAVdCZiEYkd6dwGXthvkSFWOoGGJgS2CW70VK5dQM5Oh+7ne47s74VTg=="
        crossOrigin="anonymous"
      />

      {/* 配置代码块行号 */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/line-numbers/prism-line-numbers.min.css"
        integrity="sha512-cbQXwDFK7lj2Fqfkuxbo5iD1dSbLlJGXGpfTDqbggqjHJeyzx88I3rfwjS38WJag/ihH7lzuGlGHpDBymLirZQ=="
        crossOrigin="anonymous"
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/line-numbers/prism-line-numbers.min.js"
        integrity="sha512-br8H6OngKoLht57WKRU5jz3Vr0vF+Tw4G6yhNN2F3dSDheq4JiaasROPJB1wy7PxPk7kV/+5AIbmoZLxxx7Zow=="
        crossOrigin="anonymous"
        defer
      ></script>

      {/* 注册 toolbar */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/toolbar/prism-toolbar.min.css"
        integrity="sha512-DSAA0ziYwggOJ3QyWFZhIaU8bSwQLyfnyIrmShRLBdJMtiYKT7Ju35ujBCZ6ApK3HURt34p2xNo+KX9ebQNEPQ=="
        crossOrigin="anonymous"
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/toolbar/prism-toolbar.min.js"
        integrity="sha512-cu2C9EssrOrVXT4thyL4gz/qWyh3Lq9XbICUXYyh3zJRCSKk1J08tBKPXnsSpdpZXOliaK/OJBygw/l0twAmwA=="
        crossOrigin="anonymous"
        defer
      ></script>

      {/* 展示语言类型 */}
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/show-language/prism-show-language.min.js"
        integrity="sha512-G7WvXCOHqGZZLvRUz6cBmio+7/jTln5FUVCgJon2TtggY5TpYfJsTcSk6l8w+aB2ANf0oiUCeb+5CGrdoRb1Xg=="
        crossOrigin="anonymous"
        defer
      ></script>
    </Head>
  );
}
