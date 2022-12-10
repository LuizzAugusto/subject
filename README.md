# Subject
Subject of observer pattern factory for Javascript

# Code Example
<code>const observer = createObserver();</code>

# Methods

## notifyAll
### parameter args
### type: ...any
call all observers in subject. The observers receive ...args parameters.

## subscribe
### parameter observer
### type: observer: (args: ...any) => void
add new observer to subject.

## unsubscribe
### parameter observer
### type: observer: (args: ...any) => void
remove observer from subject.