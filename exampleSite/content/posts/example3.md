---
title: "Example 3"
description: "This is desc 3"
date: 2021-08-03T11:11:11+01:00
type: "post"
draft: false
---

```haskell
factorial n = go n 1
    where
    go n res
        | n > 1     = go (n - 1) (res * n)
        | otherwise = res
```