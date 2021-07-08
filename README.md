# CRLF problematic in tauri process

1. Create a new file `test.md` with CRLF/LF endings (should be the opposite then the standard)
2. Add some lines 
3. Change path in file index.js:14 to this repo
4. Start live-server or any other server to serve index.html (Port: 5500) [or change in taur.conf.json]
5. check output in window

Expected output should be something like this:
```
warning: LF will be replaced by CRLF in test.md.
The file will have its original line endings in your working directory
:000000 100644 0000000 0000000 A        test.md

diff --git a/test.md b/test.md
new file mode 100644
index 0000000..a560784
--- /dev/null
+++ b/test.md
@@ -0,0 +1,7 @@
+dies ist ein test
+hello world
+asda
+asda
+sdasd
+asd
+asd
```

Actually returns: 

```
```
:000000 100644 0000000 0000000 A test.md

diff --git a/test.md b/test.md
new file mode 100644
index 0000000..a560784
--- /dev/null
+++ b/test.md
```
```

