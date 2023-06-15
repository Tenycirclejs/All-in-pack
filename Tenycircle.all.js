!function() {
  var global = (0, eval)('this')
  global.$ = {}
  function Tenycirclejs() {
    function isArray(obj) {
      return {}.toString.call(obj) === '[object Array]';
    }
    $.id = function (text) {
      return document.getElementById((isArray(text)) ? text[0]: text)
    }
    $.log = function (text) {
      console.log((isArray(text)) ? text[0]: text)
    }
    $.firsttext = function (text) {
      return (((isArray(text)) ? text[0]: text).slice(0, 1))
    }
    $.lasttext = function (text) {
      return (((isArray(text)) ? text[0]: text).slice(0, -1))
    }
    $.html = function (target, changevalue) {
      return new $.html.prototype.init(target, changevalue)
    }
    $.tag = function (name) {
      return document.getElementsByTagName(isArray(name) ? name[0]: name)
    }
    $.name = function (name) {
      return document.getElementsByName(isArray(name) ? name[0]: name)
    }
    $.text = function (target, changevalue) {
      if (changevalue) {
        (isArray(target) ? target[0]: target).textContent = changevalue
        return
      }
      return (isArray(target) ? target[0]: target).textContent
    }
    $.load = function (func) {
      global.addEventListener('load', func)
    }
    $.DOMload = function(func) {
      global.addEventListener('DOMcontentloaded', func)
    }
    $.max = function (num1) {
      return function (num2) {
        return Math.max((+(isArray(num1) ? num1[0]: num1)), (+(isArray(num2) ? num2[0]: num2)))
      }
    }
    $.min = function (num1) {
      return function (num2) {
        return Math.min((+(isArray(num1) ? num1[0]: num1)), (+(isArray(num2) ? num2[0]: num2)))
      }
    }
    $.factorial = function (num) {
      return (1 >= (+(num))) ? (num == 0) ? 1: +(num): +(num)*$.factorial((+(num)) - 1)
    }
    $.floor = function (num) {
      return ~~(+num)
    }
    $.round = function (num) {
      return (+num) + .5|0
    }
    $.exponentiation = function (num) {
      return function(num2) {
        return (+num) ** (+num2)
      }
    }
    $.cell = function (num) {
      return ((~~(+num))+(((Number.isInteger(+num))?(0): ((+num) >= 0)?(1): (-1))))
    }
    $.ismultiple = function (num1) {
      return function (num2) {
        return !((+num1)%(+num2))
      }
    }
    $.isodd = function (num) {
      return !!((+num)%2)
    }
    $.iseven = function (num) {
      return ismultiple(+num)`2`
    }
    $.isnull = function (target) {
      const test = target ?? true
      return test == target?false: test
    }
    $.divisor = function (num0) {
      const num = (+num0)
      var results = [];
      for (var i = 0; i++ < num;)(num%i) || results.push(i)
      return results
    }
    $.each = function (array, func, final) {
      for (var i = 0; i < array.length; i++) func(i, array[i])
      $.isnull(final) || final(array.length)
    }
    $.isprime = function (num) {
      return $.divisor(num).length == 2
    }
    $.repeat = function (func, num) {
      for (let i = 0; i++ < num;)func(i)
    }
    $.prompt = function (str) {
      return function (defaultstr) {
        prompt(isArray(str)?str[0]: str, isArray(defaultstr)?defaultstr[0]: defaultstr)
      }
    }
    $.alert = function (str) {
      alert(isArray(str)?str[0]: str)
    }
    $.confirm = function (str) {
      confirm(isArray(str)?str[0]: str)
    }
    $.setcss = function (target, obj) {
      Object.keys(obj).forEach(function (val) {
        target.style[val] = obj[val]
      })
    }
    $.version = 'v1.0.0'
    $.newElement = function (tagname, Attr, html, addto, place) {
      let Element = document.createElement(tagname)
      $.html(Element, html)
      Object.keys(Attr).forEach(function(val) {
        Element[val] = Attr[val]
      })
      (['after', 'before'].includes(place)) && addto[place](Element)
    }
    $.or = function(...bools) {
      for (i of bools) {
        if (i) {
          var result = !0
          break
        }
      }
      return (result ??= !1)
    }
    $.and = function(...bools) {
      for (i of bools) {
        if (!i) {
          var result = !1
          break
        }
      }
      return (result ??= !0)
    }
    $.reversestring = function(str) {
      str = isArray(str)?str[0]: str
      return str.split``.reverse().join``
    }
    $.$ = function(selector) {
      this.elmtarget = document.querySelectorAll(selector)
      var obj = {
        onEvent: function(...option) {
          if (typeof option[0] == "Object") {
            Object.keys(option[0]).forEach(function(val) {
              if (val.includes` `) {
                $.each(val.split` `, function(_, item) {
                  this.elmtarget.addEventListener(item, option[0][val])
                })
              } else {
                this.elmtarget.addEventListener(val, option[0][val])
              }
            })
          } else {
            if (option[0].includes` `) {
              $.each(option[0].split` `, function(_, item) {
                this.elmtarget.addEventListener(item, option[1])
              })
            } else {
              this.elmtarget.addEventListener(option[0], option[1])
            }
          }
        },
        offEvent: function(eventname, funcname) {
          if (eventname.includes` `) {
            $.each(eventname.split` `, function(_, item) {
              this.elmtarget.removeEventListener(item, funcname)
            })
          } else {
            this.elmtarget.removeEventListener(eventname, funcname)
          }
        },
        addclass: function(classname) {
          if (classname.includes` `) {
            $.each(classname.split` `, function(_, item) {
              this.elmtarget.classList.add(item)
            })
          } else {
            this.elmtarget.classList.add(classname)
          }
        },
        removeclass: function(classname) {
          if (classname.includes` `) {
            $.each(classname.split` `, function(_, item) {
              this.elmtarget.classList.remove(item)
            })
          } else {
            this.elmtarget.classList.remove(classname)
          }
        },
        toggleclass: function(classname) {
          if (classname.includes` `) {
            $.each(classname.split` `, function(_, item) {
              this.elmtarget.classList.toggle(item)
            })
          } else {
            this.elmtarget.classList.toggle(classname)
          }
        }
      }
      return obj
    }
    $.getjson = function(idname) {
      return JSON.parse($.text($.id(idname)))
    }
    $.html.prototype = {
      init: function (target, changevalue) {
        this._elmtarget = (isArray(target) ? target[0]: target)
        if (changevalue) {
          (isArray(target) ? target[0]: target).innerHTML = changevalue
          return
        }
      },
      val: function (changevalue) {
        if ($.isnull(changevalue)) {
          return this._elmtarget.getAttribute('value') ?? undefined
        } else {
          this._elmtarget.setAttribute('value', changevalue)
          return this
        }
      },
      id: function (changevalue) {
        if ($.isnull(changevalue)) {
          return this._elmtarget.getAttribute('id') ?? undefined
        } else {
          this._elmtarget.setAttribute('id', changevalue)
          return this
        }
      },
      class: function (changevalue) {
        if ($.isnull(changevalue)) {
          return this._elmtarget.getAttribute('class') ?? undefined
        } else {
          this._elmtarget.setAttribute('class', changevalue)
          return this
        }
      },
      Attr: function (attr, changevalue) {
        if ($.isnull(changevalue)) {
          return this._elmtarget.getAttribute(attr) ?? undefined
        } else {
          this._elmtarget.setAttribute(attr, changevalue)
          return this
        }
      }
    }
    $.html.prototype.init.prototype = $.html.prototype
  }
  function instances() {
    $.instances = {}
    $.instances.judgement = function() {}
    $.instances.counter = function(startcount) {
      this.count = startcount
    }
    $.instances.element = function(tagname) {
      this.element = document.createElement(tagname)
    }
    $.instances.element.prototype = {
      sethtml: function(innerhtml) {
        this.element.innerHTML = innerhtml
      },
      gethtml: function() {
        return this.element.innerHTML
      },
      get: function() {
        return this.element
      }
    }
    $.instances.counter.prototype = {
      increment: function(count = 1) {
        this.count += count
        return this.count
      },
      decrement: function(count = 1) {
        this.count += count
        return this.count
      },
      get: function() {
        return this.count
      },
      set: function(count = 0) {
        this.count = count
        return count
      }
    }
    $.instances.judgement.prototype = {
      number: function(target) {
        return +target === target
      },
      string: function(target) {
        return '' + target == target
      },
      object: function(target) {
        return /^o/.test(typeof target)
      },
      function: function(target) {
        return /^f/.test(typeof target)
      },
      array: function(target) {
        return target instanceof Array
      },
      boolean: function(target) {
        return !!target === target
      },
      undefined: function(target) {
        return target === _
      },
      null: function(target) {
        return target === null
      },
      Infinity: function(target) {
        return target === 1 / 0
      }
    }
  }
  function DOM() {
    $.DOM = {}
    $.DOM.newElement = function(tagname, attribute, html) {
      var Element = document.createElement(tagname)
      for (const attr in attribute) {
        Element.setAttribute(attr, attribute[attr])
      }
      Element.innerHTML = html
      return Element
    }
    $.DOM.add = function(Element, addto, addtype) {
      switch (addtype) {
        case 'prev': {
          addto.parentNode.insertBefore(Element, addto)
        }
        case 'firstchild': {
            addto.insertBefore(Element, addto.firstChild)
          }
        case 'appendchild': {
            addto.appendChild(Element)
          }
        case 'next': {
            addto.parentNode.insertBefore(Element, addto.nextSibl8ng)
          }
      }
    }
    $.DOM.selector = function(target) {
      return document.querySelectorAll(target)
    }
  }
  $.init = function(func) {
    if (/^f/.test(typeof func)) {
      func()
      $.init = null
      return
    }
    return {
      useall: function() {
        Tenycirclejs()
        instances()
        DOM()
      },
      usemain: function() {
        Tenycirclejs()
      },
      useex: function(exname) {
          var exlist = {
          "instance": instances,
          "instances": instances,
          "DOM":DOM
        }
        exlist[exname] && exlist[exname]()
      }
    }
  }
}() 
