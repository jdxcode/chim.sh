# FAQs

### What problems does this solve?

* Setting up a project either locally or in CI/CD is annoying when you have to install every 
little tool the project uses—especially if you want to pin versions (and you do).
* Tiny cross-platform binaries that can easily be committed into repositories—great for dotfiles repos.
* Making cross-platform wrapper shims with raw bash is not trivial—at the very least requires 
significant boilerplate.
* CI/CD does too much fetching of things off the internet without locally caching assets for 
future CI/CD runs.

### Why are there so few GitHub stars?

It's a new project! If it seems useful, don't use stars as a proxy for how
likely the project will be maintained. Rest assured that I'm fully committed to this
project for the long-haul. It's really a simple project so the commitment isn't hard for me to 
make.

In fact almost all the work with chim has been writing docs—not code. A good dev might be able 
to write a barebones version of chim over a single day.

### Can I make my own fetcher?

Currently the best way to do this is a local chim that has a `pre_execute` hook that injects
a platform binary into `$CHIM_BIN_PATH`. See [hooks](/docs/hooks) for more info.

### How do I pronounce "chim"?

_/CHim/_

Like "chin" with an "m".

### Who wrote this and why?

My name is <a href="https://jdxcode.com">Jeff</a> and I've spent most of my career at this point
working on build & release tooling.

I wrote this because I wish I had it 10 years ago. I've always felt like it's way harder than it 
should be to just get tools onto machines. I've had a lot of terrible ideas on how to solve this 
in the past but after mulling this over in my head over years I came up with the idea for chim.
