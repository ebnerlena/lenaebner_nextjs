---
title: 'AI with a EV3 Legomindstorm'
date: '2019-06-02'
short: 'Trained a EV3 Lego Mindstorm robot with a neuronal network'
repo_url: ''
portfolio_link: ''
deploy_url: 'https://www.youtube.com/watch?v=_vZRw_STQWU&t=7s'
image: 'ev3.jpg'
---

In my graduation thesis I wrote about Artificial Intelligence and started to explore a
little bit what machine-learning is all about. For the practical part I have taken up the
challenge to imitate the project "BrickClassifi3r " from CT Magazine.
The goal is to make a Lego-Mindstorm-EV3 robot learn to distinguish between three
different objects using an infrared sensor and a neural network. The neural network
was just a very simple 3-layer network (24-6-3) with one input-, one output- and one
hidden-layer.
The training happens with a simple Python script and the TensorFlow environment.
Therefore, I collected 250 training sets and 125 test sets per object. Unfortunately,
after running the script (doing the training) I could only achieve a maximum hit rate of
59%, but this could also have been due to the quality of my data sets.
In general, it was an amazing opportunity to explore what AI is on a very basic level.
