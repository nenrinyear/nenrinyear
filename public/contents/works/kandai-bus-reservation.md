---
title: "関西の某大学のバス予約システムにおける自動予約バッチ"
date: "2024/05"
description: "このプログラムは、毎日23:58に起動し、0時になった瞬間に予約可能なバスをスクレイピングで取得し、あらかじめ指定された時間に近いバスを予約するプログラムです。元々Python+Seleniumでスクレイピングをしていたものを高速化、軽量化するためにRustで書き直しました"
tags: ["Rust", "reqwest", "tokio"]
---