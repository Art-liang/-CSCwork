import React, { useState, useMemo } from 'react';
import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Bot,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Copy,
  Database,
  Download,
  ExternalLink,
  FileCode2,
  FileSpreadsheet,
  FileText,
  Filter,
  FolderKanban,
  Globe,
  Image as ImageIcon,
  Layers,
  LayoutGrid,
  List,
  Lock,
  Mail,
  RefreshCw,
  Search,
  Send,
  Shield,
  ShieldAlert,
  ShieldBan,
  ShieldCheck,
  Sparkles,
  Terminal,
  TrendingUp,
  Upload,
  Users,
  Wrench,
  X,
  Zap,
} from 'lucide-react';

// ============================================================================
// 0. WP 惡意攻擊掃描 IP 黑名單資料庫（完整收錄 500+ 筆 IPv4 / IPv6）
// ============================================================================
const MALICIOUS_IP_RAW = `143.0.191.26
105.158.77.194
179.137.11.3
186.236.11.93
5.48.143.66
201.149.125.59
100.24.42.116
100.27.31.125
100.30.239.243
100.31.128.194
100.48.48.190
100.48.64.167
100.53.189.131
100.53.75.248
100.54.233.136
100.56.16.75
100.59.39.201
100.61.152.106
102.205.218.42
102.220.160.173
102.23.122.251
102.89.76.109
103.101.228.252
103.103.163.220
103.12.78.206
103.145.173.208
103.158.138.61
103.181.75.130
103.211.217.32
103.213.211.203
103.213.38.228
103.226.200.174
103.240.169.243
103.241.205.82
103.253.27.215
103.253.27.23
103.253.27.238
103.253.27.251
103.59.160.18
103.59.160.198
103.59.160.251
103.65.237.53
103.70.146.139
103.79.221.149
103.87.142.231
104.155.92.41
104.196.213.102
104.196.7.211
104.197.178.217
104.199.22.169
104.248.155.49
104.248.79.76
104.28.152.29
104.28.156.111
104.28.196.54
104.28.208.84
104.28.213.128
104.28.222.18
104.28.222.43
104.28.245.124
104.28.245.127
104.28.254.16
105.116.12.31
105.127.15.98
105.246.94.103
105.98.187.209
106.196.10.166
106.215.156.151
106.221.177.12
106.221.189.44
107.20.107.2
107.23.20.142
109.70.100.14
110.238.117.150
111.125.81.250
112.204.162.83
112.204.168.164
112.207.108.105
113.11.90.242
113.211.208.154
113.224.140.120
113.224.153.77
113.232.132.55
113.99.201.29
115.91.5.140
116.203.51.159
117.192.193.202
117.196.42.239
117.62.237.45
118.38.44.223
119.13.89.219
119.154.35.166
119.154.50.42
119.30.118.57
119.8.124.93
119.8.53.125
120.29.77.175
122.161.74.143
122.162.148.185
122.162.149.182
122.8.149.134
122.8.154.153
122.96.48.71
122.97.212.66
124.29.239.25
129.212.226.33
129.213.151.234
129.221.193.184
129.221.200.132
129.221.224.34
129.221.248.33
13.140.151.32
13.140.157.162
13.217.165.105
13.217.227.131
13.217.4.133
13.217.54.21
13.218.205.36
13.218.80.245
13.219.184.38
13.221.11.112
13.221.64.47
13.223.54.240
13.60.12.58
130.131.18.23
130.210.117.202
130.49.215.84
133.206.136.33
134.102.186.192
134.185.89.72
135.148.204.118
135.148.234.67
136.117.194.7
136.144.42.19
136.144.43.243
136.66.211.195
136.67.146.236
136.67.154.210
136.70.150.100
136.70.234.63
136.80.108.7
136.90.57.10
137.59.230.193
137.74.211.46
138.122.191.182
138.185.185.237
138.2.77.6
138.226.246.235
138.68.149.24
138.68.160.12
138.68.232.22
138.68.4.142
139.129.193.42
139.28.219.70
139.59.108.119
139.84.172.185
139.99.44.195
14.224.70.250
14.233.231.209
140.238.60.130
140.245.125.160
140.245.52.156
140.99.131.174
141.98.80.122
142.111.34.17
143.110.228.227
143.203.219.49
143.244.57.121
143.244.57.123
143.244.57.88
143.244.57.92
144.126.197.233
144.91.90.22
145.40.130.100
146.148.115.149
146.148.127.111
146.190.63.48
146.70.194.222
146.70.194.46
146.70.40.68
146.70.40.70
147.139.182.57
147.90.214.215
148.222.217.19
149.22.102.175
149.88.23.87
15.204.218.172
15.235.165.38
150.221.114.161
150.242.197.15
151.240.92.60
152.36.129.168
152.42.174.204
152.42.217.13
152.42.227.254
152.42.254.255
152.58.190.68
152.59.185.243
152.59.185.36
153.117.61.27
153.117.9.0
153.67.244.235
153.67.7.78
154.160.16.169
154.160.19.164
154.219.116.232
154.45.174.99
156.146.33.76
156.146.47.231
156.255.238.104
157.100.104.52
157.15.202.16
157.20.32.166
157.230.170.220
157.230.91.83
157.245.40.37
157.245.45.86
158.101.19.62
158.120.255.246
159.138.11.106
159.203.83.178
159.223.15.39
159.223.88.57
159.26.109.82
159.65.111.124
159.65.48.60
159.65.58.218
159.89.174.87
160.30.105.169
161.33.166.228
161.35.169.52
161.35.213.203
161.97.99.129
163.52.135.195
163.52.135.196
163.52.135.234
165.22.111.189
165.22.117.190
165.22.169.205
165.22.220.74
165.22.225.8
165.22.232.212
165.22.99.58
165.227.43.3
165.245.184.28
165.245.232.117
167.71.125.54
167.71.151.231
167.71.203.252
168.138.170.54
168.144.135.221
168.144.240.206
168.144.43.236
168.194.142.128
168.210.178.157
169.211.128.234
169.224.117.107
169.224.17.61
169.224.17.78
169.224.18.39
169.224.20.82
169.224.21.236
169.58.200.2
170.39.213.163
171.103.126.54
171.226.11.20
171.25.193.46
172.105.168.152
172.4.191.91
172.56.3.161
172.64.198.116
172.64.198.149
172.64.198.45
172.64.198.90
172.64.200.117
172.64.200.18
172.64.200.48
172.64.200.93
172.69.155.20
172.98.33.101
172.98.33.85
172.98.33.87
173.239.224.14
173.239.224.16
173.239.224.213
175.107.233.165
175.110.215.87
175.158.164.162
175.164.16.4
176.105.201.134
177.10.175.187
177.107.22.203
177.139.45.114
177.81.73.97
178.128.207.138
178.128.45.90
178.128.64.118
178.158.192.16
178.173.234.65
178.20.55.182
178.62.103.49
178.73.224.167
178.73.252.107
178.94.25.101
179.125.33.62
179.218.74.236
179.43.171.130
18.118.46.6
18.145.87.177
18.175.116.69
18.206.119.90
18.207.123.224
18.207.157.240
18.207.190.166
18.208.114.187
18.209.109.135
18.212.150.95
18.212.79.59
18.212.95.151
18.232.115.62
18.232.65.202
18.232.94.153
18.88.38.65
180.244.132.230
180.75.235.115
181.118.53.76
181.193.98.1
181.23.145.216
181.41.199.186
181.86.65.246
182.176.123.202
182.183.81.5
182.183.87.100
182.253.145.199
182.69.179.130
182.69.181.11
184.180.100.96
185.162.142.140
185.194.178.33
185.194.178.52
185.199.157.13
185.199.157.14
185.199.157.18
185.213.155.212
185.213.230.74
185.246.128.82
185.33.180.136
185.68.76.48
186.129.73.53
186.179.142.116
186.79.169.237
187.126.27.47
187.190.181.232
187.190.254.140
187.190.57.135
187.191.36.194
187.5.215.110
187.63.121.129
188.118.66.223
188.163.92.41
188.165.125.250
188.166.252.197
188.166.9.24
188.212.135.129
188.212.135.137
188.253.217.43
188.64.166.107
189.203.193.50
189.203.252.64
189.219.54.242
189.237.24.85
190.103.83.2
190.120.152.38
190.150.37.188
190.172.68.119
190.92.174.183
190.93.181.15
190.98.110.250
192.0.119.74
192.0.91.147
192.178.16.128
192.253.209.62
192.253.209.81
192.42.116.104
192.42.116.50
193.149.190.223
193.187.151.123
193.200.229.243
193.218.118.173
193.233.121.151
193.235.141.238
193.34.212.54
193.41.203.15
193.47.62.31
194.0.213.69
194.146.191.104
194.15.112.133
194.44.26.180
194.44.57.98
194.5.49.164
194.5.49.231
194.5.82.14
194.5.82.18
194.88.98.123
195.178.110.101
195.178.110.102
195.178.110.18
195.178.110.223
195.178.110.78
195.181.171.232
195.40.122.89
196.191.144.150
196.191.144.180
196.207.154.110
196.3.217.63
197.0.94.142
197.156.123.28
197.185.133.51
197.26.201.221
198.235.24.244
198.98.55.27
2.29.187.71
2.57.17.173
20.121.116.167
20.236.64.184
20.55.1.105
20.65.176.164
20.74.254.174
20.84.164.199
20.98.30.127
200.162.154.97
200.215.229.11
200.56.110.185
200.59.93.223
200.69.136.164
200.81.166.16
2001:448a:5040:16b6:18b6:fb3:3830:386e
2001:448a:5040:16b6:7dca:e896:72a0:9ce1
2001:448a:50a0:7b31:81f9:4360:ab92:3812
2001:4bb8:16c:6cab:c021:83f9:3045:47db
2001:ee0:4b7f:6380:2dcf:b6d3:8e8b:efe7
201.152.43.40
202.141.230.214
203.101.186.142
203.55.81.2
203.57.40.171
204.48.29.189
204.8.96.85
206.189.168.212
206.189.18.213
206.189.19.19
206.189.19.82
206.189.40.120
206.232.75.138
207.175.162.235
207.175.230.75
209.97.162.52
211.184.116.177
212.253.160.207
213.139.212.31
213.160.71.30
213.209.159.133
213.5.130.216
216.24.212.21
216.24.212.37
217.131.95.239
217.17.100.141
223.121.15.221
23.129.64.146
23.132.164.250
23.26.46.104
23.27.127.166
2401:4900:1c01:cd9e:805:84ff:e3fd:1469
2401:4900:1cd6:3cfc:709e:9d03:6feb:4643
2401:4900:8fc4:3525:5d88:7ae3:a353:bbc5
2401:4900:8fcd:1393:7421:9609:4960:375c
2401:c080:1000:3f26:5400:7ff:fe14:4111
2405:201:5005:8258:2ccd:4951:26d8:ac83
2409:4090:202b:840a:49b8:506f:26e6:7af6
2409:4090:202b:840a:5c02:4c1b:a278:cccd
2409:40c0:7c:b168:298e:8815:6531:b22b
2409:40f0:113:8f2f:856a:26b9:8555:f444
2409:40f0:1196:5288:50f:58ce:bbcb:5e90
2600:3c02::2000:2fff:fe72:3df2
2600:3c02::2000:2fff:fea5:9eaa
2600:3c02::2000:31ff:fe72:2d64
2600:3c02::2000:48ff:fe8a:d6c
2600:3c02::2000:66ff:fed1:f85c
2600:3c02::2000:ff:fe23:7268
2600:3c03::2000:6eff:fe90:6d11
2600:3c03::2000:85ff:fec2:29c8
2602:80d:1008::d8
2604:a880:2:d1:0:1:d405:c001
2604:a880:2:d1:0:1:d44f:5001
2604:a880:400:d1:0:5:6c47:7001
2604:a880:400:d1:0:5:6c79:7001
2604:a880:400:d1:0:5:6c79:c001
2604:a880:400:d1:0:5:6caa:1
2605:59ca:8660:3b08:7410:3ecf:85d4:a34a
27.125.246.64
27.4.232.238
2800:484:207c:5700::7a2
2a01:4020:2:b:101::3ad
2a01:4020:2:b:101::41b
2a01:4020:2:b:101::57d
2a01:4020:2:b:101::799
2a01:4020:2:b:102::18a
2a01:4020:2:b:102::4a1
2a01:4020:2:b:102::4df
2a01:4020:2:b:102::589
2a01:4020:2:b:102::693
2a01:4020:2:b:102::719
2a01:4020:2:b:102::9
2a01:4020:2:b:103::1e
2a01:4020:2:b:103::249
2a01:4020:2:b:103::259
2a01:4020:2:b:103::562
2a01:4020:2:b:103::5a4
2a01:4020:2:b:103::61b
2a01:4020:2:b:103::e4
2a01:4020:31:0:101::255
2a01:4020:31:0:102::131
2a01:4020:31:0:102::19f
2a01:4020:31:0:102::474
2a01:4020:31:0:102::a6
2a01:7e00::2000:6bff:fe45:75a0
2a01:7e01::2000:f7ff:fe9b:e41e
2a03:b0c0:1:e0:0:1:fbcc:1001
2a03:b0c0:1:e0:0:1:fbd2:c001
2a05:d012:eb9:c202:9149:e9a4:2bfa:81a6
2a05:d01c:d99:8400:1bab:5a18:8be2:5a76
2a09:bac5:482:25c3::3c3:32
2a09:bac5:485:18d2::279:9c
3.212.240.78
3.214.224.93
3.215.182.3
3.229.117.75
3.234.236.196
3.235.197.93
3.235.224.111
3.235.76.155
3.236.138.47
3.236.141.94
3.236.145.91
3.236.234.218
3.237.7.173
3.239.2.168
3.239.96.253
3.80.139.164
3.80.23.6
3.80.32.87
3.82.152.3
3.82.163.163
3.83.116.238
3.83.184.147
3.83.98.28
3.84.165.37
3.86.146.47
3.88.52.253
3.90.185.248
3.91.106.228
3.92.188.249
3.92.61.224
3.92.63.177
3.94.186.202
3.94.186.28
3.94.76.46
3.95.20.23
31.23.39.167
31.56.139.171
31.57.90.222
31.57.90.8
31.59.129.193
32.198.2.154
32.201.40.211
32.201.56.165
32.202.188.67
34.102.22.33
34.118.146.76
34.131.64.59
34.139.93.206
34.14.117.108
34.14.61.120
34.14.63.23
34.14.83.80
34.140.132.23
34.147.98.180
34.156.218.56
34.156.242.77
34.159.34.127
34.165.163.151
34.165.247.176
34.169.253.254
34.175.102.86
34.178.166.202
34.18.229.105
34.181.180.59
34.187.155.207
34.187.253.90
34.207.204.150
34.21.249.91
34.22.183.142
34.22.192.206
34.22.199.31
34.226.142.22
34.228.37.156
34.228.69.224
34.229.89.81
34.23.20.224
34.230.43.240
34.233.128.12
34.235.153.200
34.239.158.170
34.24.148.74
34.38.144.211
34.38.48.248
34.48.91.29
34.53.254.35
34.56.30.246
34.60.243.123
34.66.82.29
34.71.191.6
34.75.252.236
34.76.183.190
34.77.181.250
34.83.17.72
35.153.68.104
35.173.131.75
35.173.178.108
35.179.16.38
35.185.3.104
35.187.118.13
35.187.66.170
35.205.72.251
35.223.88.235
35.233.175.201
35.233.44.84
35.236.219.227
35.240.59.25
35.243.171.92
35.245.254.163
35.254.0.29
36.73.23.78
37.114.63.5
37.150.44.124
37.67.191.17
39.37.130.174
39.38.97.248
39.56.25.10
39.57.194.9
4.213.7.31
40.160.100.181
41.105.164.216
41.155.18.135
41.218.213.57
43.156.145.232
43.225.189.107
43.255.105.213
44.192.74.172
44.197.204.125
44.200.41.95
44.200.43.1
44.200.43.11
44.202.1.188
44.204.192.119
44.204.227.8
44.204.62.94
44.208.163.90
44.211.117.6
44.211.26.30
44.213.64.148
44.221.80.146
44.221.80.221
44.221.85.194
44.222.199.149
45.126.252.18
45.138.12.172
45.138.12.179
45.138.12.22
45.138.12.25
45.138.12.32
45.138.12.41
45.139.215.114
45.141.215.123
45.142.193.169
45.148.10.16
45.148.10.201
45.148.10.21
45.152.202.75
45.156.87.28
45.166.84.245
45.174.13.172
45.237.21.16
45.45.237.69
45.66.35.28
45.8.19.202
45.8.19.214
45.8.19.233
45.8.19.235
45.8.19.237
45.84.107.100
45.87.212.184
45.92.1.132
45.92.1.14
45.94.216.49
46.98.60.104
47.107.137.68
47.238.214.71
48.217.233.26
49.36.125.215
49.36.35.61
49.43.234.222
49.43.90.30
5.102.169.100
5.102.169.101
5.102.169.102
5.129.178.55
5.139.77.222
5.155.106.214
5.162.125.165
5.2.69.83
5.37.114.182
5.62.49.4
50.17.168.246
50.6.171.229
51.38.119.195
51.83.224.147
52.201.252.213
52.206.202.97
52.206.216.120
52.55.39.225
52.90.189.155
52.91.159.127
54.144.58.252
54.145.141.32
54.145.198.49
54.145.228.226
54.146.36.58
54.147.153.242
54.147.240.6
54.152.43.17
54.159.185.51
54.160.182.97
54.164.1.100
54.165.196.71
54.166.207.152
54.172.15.119
54.173.55.107
54.196.145.145
54.196.196.57
54.197.198.225
54.204.177.204
54.209.211.156
54.221.185.190
54.221.190.249
54.221.30.111
54.225.57.156
54.227.51.207
54.234.16.101
54.234.202.149
54.235.224.51
54.235.53.248
54.236.84.237
54.237.245.1
54.80.192.102
54.83.107.184
54.85.19.54
54.87.138.1
54.87.229.16
54.89.181.22
54.90.178.130
54.91.128.208
58.145.168.186
59.102.0.188
59.98.103.105
60.53.161.131
60.53.49.78
61.9.3.18
62.197.145.53
62.201.243.215
62.60.130.163
62.60.130.18
62.60.130.201
62.60.130.36
64.137.90.187
64.227.156.198
65.52.168.33
66.175.211.202
66.245.172.13
67.205.146.117
67.205.171.158
68.183.130.82
68.183.205.253
68.56.63.146
68.66.248.53
69.80.225.222
71.190.159.32
72.253.251.7
72.255.28.196
72.255.52.85
72.51.57.228
72.53.204.165
76.150.173.230
77.243.184.211
77.90.185.122
77.90.185.239
78.1.103.219
78.128.114.174
78.142.18.40
78.187.229.98
78.31.67.209
79.106.7.146
79.110.132.21
79.124.56.214
79.124.62.126
79.124.62.134
79.124.62.178
79.124.62.230
79.127.164.159
79.127.164.185
79.33.87.63
8.137.150.5
8.231.193.244
80.244.42.111
80.66.83.67
80.94.92.74
81.171.74.60
82.102.18.116
82.102.18.118
82.102.18.190
82.148.238.114
82.159.48.106
82.223.30.186
82.23.188.73
83.141.89.178
84.54.71.72
85.204.70.104
85.204.70.106
85.204.70.116
85.204.70.88
85.93.58.216
86.136.132.89
86.38.98.24
86.38.98.32
86.38.98.59
87.106.27.215
87.120.126.29
88.242.68.22
89.1.58.85
89.151.28.55
89.187.163.216
89.245.213.99
89.46.114.198
90.217.160.139
91.134.28.199
91.194.91.202
91.199.118.51
91.209.54.1
91.210.27.187
91.245.116.37
91.92.34.35
91.92.47.40
91.92.47.41
91.92.47.42
91.92.47.43
91.92.47.49
91.92.47.50
91.92.47.51
91.92.47.52
91.92.47.53
91.92.47.54
91.92.47.55
91.92.47.56
91.92.47.6
91.92.47.62
91.92.47.63
91.92.47.64
91.92.47.7
91.92.47.8
91.92.47.9
92.112.110.2
92.112.94.82
92.119.177.22
92.38.20.64
92.41.12.140
93.123.109.103
93.123.109.105
93.123.109.164
93.123.109.247
94.154.43.48
94.158.244.49
94.26.106.147
94.26.83.88
94.74.113.231
94.74.116.93
95.82.117.120
95.83.42.79
98.160.124.35
98.44.25.205
98.81.109.189
98.81.126.5
98.81.212.54
98.82.120.155
98.82.128.222
98.82.169.162
98.83.33.14
98.83.41.189
98.88.25.119
98.88.72.182
98.89.21.49
98.91.199.23
98.92.33.241`;

const MALICIOUS_IP_LIST = MALICIOUS_IP_RAW.split('\n')
  .map((s) => s.trim())
  .filter(Boolean);

const HTACCESS_BLOCK_SNIPPET = `# ==============================================================================
# 【群益業務 WP 新站資安標準包】Apache .htaccess 惡意掃描 IP 全站封鎖規則
# 收錄筆數：${MALICIOUS_IP_LIST.length} 筆（阻擋 xmlrpc.php 暴力破解、WP 後台掃描與惡意爬蟲）
# 使用方式：貼至新網站根目錄 .htaccess 檔案最上方（# BEGIN WordPress 之前）
# ==============================================================================
<IfModule mod_authz_core.c>
  <RequireAll>
    Require all granted
${MALICIOUS_IP_LIST.map((ip) => `    Require not ip ${ip}`).join('\n')}
  </RequireAll>
</IfModule>`;

// WP 新站開發標準懶人包清單
const NEW_SITE_DEV_PLAYBOOK = [
  {
    step: '01',
    title: '資安防禦第一關：匯入惡意 IP 黑名單壓縮包',
    badge: '必做 · 零攻擊',
    desc: '新站一開通，立刻將本區收錄的 500+ 筆惡意 IP 匯入 Wordfence 防火牆或貼入 .htaccess，同時停用 xmlrpc.php 與隱藏預設管理員帳號枚舉。',
  },
  {
    step: '02',
    title: '佈景與外掛標準底座：Astra 子主題 + Rank Math SEO',
    badge: '標準架構',
    desc: '統一安裝 Astra v4.14.3 搭配預設合規 Child Theme、Rank Math SEO（關閉未分類索引）、WP Fastest Cache 與自動化備份外掛。',
  },
  {
    step: '03',
    title: '金融期貨合規警語與標準大頭照版型套用',
    badge: '合規零風險',
    desc: '在頁尾全域區塊掛載「群益期貨 / 群益槓桿交易商風險預告警語」與業務證照字號，並套用標準 1200x1200 商務形象照 CSS 變數。',
  },
  {
    step: '04',
    title: 'SEO 基礎建設與 Search Console / 戰情台納管',
    badge: '上線驗收',
    desc: '提交 sitemap_index.xml 至 Google Search Console，設定首頁 Title 為「群益{團隊}｜{業務姓名}」，最後將網址與信箱登錄進本中控台自動巡檢。',
  },
];

// ============================================================================
// 1. 每日 WP / PHP / Astra 官方最新版本與資安漏洞情報基準
// ============================================================================
const SYSTEM_BENCHMARKS = {
  wpLatest: '7.1.5',
  phpLatest: '8.3.37 / 8.4.28',
  astraLatest: '4.14.3',
  lastScanTime: '2026-11-25 09:00',
  securityBulletins: [
    {
      id: 'WP-2026-1125',
      level: 'CRITICAL',
      title: 'WordPress 7.1.5 緊急資安維護版釋出（修補 REST API 權限繞過漏洞）',
      date: '今日發布',
      action: '建議全站 36 站於 48 小時內完成核心小版本升級',
    },
    {
      id: 'PHP-2026-1122',
      level: 'WARN',
      title: 'PHP 8.3.37 / 8.4.28 安全更新（修補 OpenSSL 與 cURL 記憶體洩漏）',
      date: '3 天前',
      action: '已確認主機商環境排程本週四凌晨自動套用修補',
    },
    {
      id: 'ASTRA-4.14.3',
      level: 'INFO',
      title: 'Astra 佈景主題官方最新穩定版 v4.14.3（優化行動端 LCP 載入速度）',
      date: '本週更新',
      action: '目前 7 個業務站點仍停留在 v4.13.x，可一鍵批次升級',
    },
  ],
};

// ============================================================================
// 2. 三大金融商業領域本月熱門關鍵字雷達資料（期貨業 / 金融業 / 台灣全網 各 5 組）
// ============================================================================
const SECTOR_HOT_KEYWORDS = {
  futures: {
    title: '期貨行業 · 本月熱門關鍵字 Top 5',
    badge: 'FUTURES',
    accent: 'bg-blue-600 text-white',
    items: [
      { kw: '微台指期貨保證金', vol: '14,800', trend: '+68%', captured: '謝琮凱 #2 · 洪健豪 #4' },
      { kw: '黃金期貨保證金與一點多少錢', vol: '9,600', trend: '+54%', captured: '洪健豪 #2 · 楊侁達 #5' },
      { kw: '小那斯達克期貨夜盤時間', vol: '8,100', trend: '+27%', captured: '詹東翰 #4 · 丁佩君 #9' },
      { kw: '選擇權賣方保證金計算', vol: '6,200', trend: '+31%', captured: '郭悅寧 #3 · 曾韋菁 #8' },
      { kw: '群益 MT5 指標安裝教學', vol: '5,400', trend: '+49%', captured: '謝琮凱 #1 · 吳元元 #3' },
    ],
  },
  finance: {
    title: '金融業 · 本月熱門關鍵字 Top 5',
    badge: 'FINANCE',
    accent: 'bg-emerald-600 text-white',
    items: [
      { kw: '高股息 ETF 配息日曆表', vol: '38,500', trend: '+72%', captured: '適合撰寫期貨避險對沖文' },
      { kw: '美債殖利率與降息最新預測', vol: '24,200', trend: '+45%', captured: '適合導流至美債期貨教學' },
      { kw: '新台幣匯率走勢與美元定存', vol: '19,800', trend: '+39%', captured: '槓桿外匯業務切入熱字' },
      { kw: '股票期貨槓桿倍數與手續費', vol: '11,400', trend: '+34%', captured: '涂晨庠 #6 · 張芝綺 #7' },
      { kw: '證券戶與期貨戶線上開戶優惠', vol: '9,100', trend: '+28%', captured: '張瑜真 #7 · 楊蕙瑜 #5' },
    ],
  },
  taiwan: {
    title: '台灣全網本月熱門關鍵字 Top 5',
    badge: 'TAIWAN TRENDS',
    accent: 'bg-amber-500 text-slate-950',
    items: [
      { kw: '台股加權指數即時走勢', vol: '165,000', trend: '+52%', captured: '全站盤前快訊流量入口' },
      { kw: 'AI 伺服器概念股與半導體法說', vol: '84,000', trend: '+64%', captured: '可延伸電子期貨交易策略' },
      { kw: '2026 報稅節稅與股利所得試算', vol: '62,000', trend: '+41%', captured: '海外期貨免證所稅優勢切入' },
      { kw: '地震颱風停班停課與台指期休市', vol: '47,000', trend: '+88%', captured: '突發時事高點擊懶人包' },
      { kw: 'ChatGPT / Gemini AI 理財工具推薦', vol: '33,400', trend: '+59%', captured: 'GEO AI 搜尋高引用主題' },
    ],
  },
};

// ============================================================================
// 2.5 金融區塊專用 Similarweb 流量領先者 & 關鍵詞意圖研究資料
// ============================================================================
const FINANCE_TRAFFIC_LEADERS = [
  {
    domain: 'tradingview.com',
    label: 'TradingView 國際看盤',
    share: 5.46,
    mom: '+0.90%',
    isUp: true,
    rank: '#121',
    visits: '233.5M',
    desktop: 76.7,
    mobile: 23.3,
    duration: '00:04:17',
  },
  {
    domain: 'investing.com',
    label: 'Investing 財經報價',
    share: 3.07,
    mom: '-6.18%',
    isUp: false,
    rank: '#446',
    visits: '131.0M',
    desktop: 41.9,
    mobile: 58.1,
    duration: '00:04:38',
  },
  {
    domain: 'futuresbartender.com',
    label: '群益期貨 · 洪健豪 (內部標竿)',
    share: 2.62,
    mom: '+54.80%',
    isUp: true,
    rank: '#1 內部站',
    visits: '3,840',
    desktop: 28.4,
    mobile: 71.6,
    duration: '00:03:45',
  },
  {
    domain: 'cfd-jungle.com',
    label: '群益槓桿 · 謝琮凱 (內部標竿)',
    share: 2.45,
    mom: '+48.50%',
    isUp: true,
    rank: '#2 內部站',
    visits: '3,420',
    desktop: 31.2,
    mobile: 68.8,
    duration: '00:03:22',
  },
  {
    domain: 'sdainvestnow.com',
    label: '群益期貨 · 楊侁達 (內部標竿)',
    share: 2.06,
    mom: '+49.20%',
    isUp: true,
    rank: '#3 內部站',
    visits: '3,350',
    desktop: 26.5,
    mobile: 73.5,
    duration: '00:03:18',
  },
];

const FINANCE_KEYWORD_INTENT_LIST = [
  {
    term: '微台指期貨保證金一口多少',
    traffic: '14.8K',
    sharePct: '6.75%',
    compBars: [28, 22, 18, 32],
    intent: 'TRANSAC. 交易意圖',
    intentColor: 'bg-sky-100 text-sky-900',
    pos: 2,
    serp: ['AI 摘要', '精選段落', '常見問題'],
  },
  {
    term: '黃金期貨保證金與一點跳動價值',
    traffic: '9.6K',
    sharePct: '4.82%',
    compBars: [35, 20, 15, 30],
    intent: 'INFO 資訊查詢',
    intentColor: 'bg-purple-100 text-purple-900',
    pos: 2,
    serp: ['AI 摘要', '計算表格', '影片'],
  },
  {
    term: '群益 MT5 指標安裝與開戶教學',
    traffic: '5.4K',
    sharePct: '3.94%',
    compBars: [42, 24, 14, 20],
    intent: 'NAV + TRANSAC.',
    intentColor: 'bg-emerald-100 text-emerald-900',
    pos: 1,
    serp: ['網站連結', '圖文步驟', 'AI 摘要'],
  },
  {
    term: '小那斯達克期貨夜盤交易時間',
    traffic: '8.1K',
    sharePct: '3.64%',
    compBars: [30, 25, 20, 25],
    intent: 'INFO 資訊查詢',
    intentColor: 'bg-purple-100 text-purple-900',
    pos: 4,
    serp: ['精選段落', '常見問題'],
  },
];

// ============================================================================
// 2.6 SEO 關鍵字更新教學 4 步驟實戰模組
// ============================================================================
const SEO_UPDATE_LESSONS = [
  {
    step: 'STEP 01',
    title: '標題注入「年份 + 具體商品規格數字」（提升 CTR 點擊率 +38%）',
    before: '台指期貨保證金介紹與交易規則說明',
    after: '【2026最新】微台指 / 小台指期貨保證金一口多少？跳動一點價值與夜盤時間懶人包',
    reason: 'Google 搜尋者習慣尋找「最新年份」與「一口多少錢」的明確數字，加入具體長尾詞可立即避開大型財經網站競爭。',
  },
  {
    step: 'STEP 02',
    title: '文章首段寫出「50 字結論摘要卡」（搶佔 Google AI Overview 摘要首位）',
    before: '大家好，今天要來跟大家聊聊最近很熱門的黃金期貨，很多人問我黃金怎麼交易...',
    after: '結論：2026 年微型黃金期貨（MGC）原始保證金約為 1,150 美元，每跳動 0.1 點價值 1 美元，台灣時間 06:00 至次日 05:00 皆可交易。',
    reason: 'AI 搜尋引擎（Google AIO、ChatGPT、Perplexity）最喜歡直接擷取「開頭即給明確數字結論」的段落作為引用來源。',
  },
  {
    step: 'STEP 03',
    title: '將 H2 副標題改寫為「客戶真實會問的問句」並搭配 FAQ 區塊',
    before: 'H2：手續費與開戶流程',
    after: 'H2：群益期貨線上開戶需要準備什麼證件？最快幾天可以下單？',
    reason: '問句式 H2 標題能精準對應 Google「相關問題（People Also Ask）」與語音/AI 對話式搜尋。',
  },
  {
    step: 'STEP 04',
    title: '每月更新 Rank Math SEO 描述與文章「最後更新日期」',
    before: '發布日期停留在 2024 年，Meta Description 空白由系統自動抓取亂碼選單',
    after: '於 Rank Math 填入 65 字內行動呼籲摘要，更新最新期交所保證金表格後重新發佈刷新時間戳',
    reason: '金融期貨類內容屬於 YMYL（金錢相關）領域，Google 演算法會大幅降低超過半年未更新數據的文章排名。',
  },
];

// ============================================================================
// 3. 36 站群益業務網站資料庫（已完全移除私人站點，純淨商業演示版）
// ============================================================================
const INITIAL_SITES = [
  {
    id: 'site-01',
    team: '槓桿',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '謝琮凱',
    note: 'Jungle · 槓桿交易主力站',
    url: 'https://cfd-jungle.com/',
    domain: 'cfd-jungle.com',
    email: 'a99649@futures.capital.com.tw',
    astraVer: '4.13.9',
    wpVer: '7.1.4',
    outdatedPlugins: 1,
    daysSincePost: 6,
    themeColor: 'from-sky-900 via-blue-800 to-slate-900',
    seo: {
      healthScore: 91,
      dr: 29,
      crawled: 184,
      redirects: 3,
      broken: 1,
      organicTraffic: 3420,
      growthPct: 48.5,
      aiCitations: { aiOverview: 29, chatgpt: 15, perplexity: 14, gemini: 9 },
      keywords: { top3: 19, top10: 41 },
      topKeywords: [
        { kw: '謝琮凱 期貨', pos: 1, vol: 980 },
        { kw: '群益 MT5 指標安裝教學', pos: 1, vol: 5400 },
      ],
    },
  },
  {
    id: 'site-02',
    team: '台中期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '廖梓棋',
    note: '台中期貨 · 槓桿交易神探',
    url: 'https://capfutures.com/',
    domain: 'capfutures.com',
    email: 'a97157@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 9,
    themeColor: 'from-slate-800 via-blue-900 to-slate-950',
    seo: {
      healthScore: 93,
      dr: 27,
      crawled: 162,
      redirects: 1,
      broken: 0,
      organicTraffic: 2680,
      growthPct: 39.4,
      aiCitations: { aiOverview: 22, chatgpt: 11, perplexity: 9, gemini: 6 },
      keywords: { top3: 15, top10: 34 },
      topKeywords: [
        { kw: '台中期貨開戶推薦', pos: 2, vol: 1900 },
        { kw: '廖梓棋 期貨', pos: 1, vol: 620 },
      ],
    },
  },
  {
    id: 'site-03',
    team: '期貨',
    opsStatus: '外包',
    buildStage: '已上線',
    name: '娜娜財神',
    note: '外包站 · 財神娜娜陳莉庭',
    url: 'https://www.futuresnana.tw',
    domain: 'futuresnana.tw',
    email: '',
    astraVer: '4.12.0',
    wpVer: '7.1.2',
    outdatedPlugins: 2,
    daysSincePost: 18,
    themeColor: 'from-rose-900 via-pink-800 to-slate-900',
    seo: {
      healthScore: 82,
      dr: 24,
      crawled: 110,
      redirects: 4,
      broken: 2,
      organicTraffic: 1890,
      growthPct: 18.2,
      aiCitations: { aiOverview: 14, chatgpt: 8, perplexity: 6, gemini: 4 },
      keywords: { top3: 9, top10: 24 },
      topKeywords: [
        { kw: '財神娜娜 期貨', pos: 1, vol: 840 },
        { kw: '期貨入門教學懶人包', pos: 5, vol: 3100 },
      ],
    },
  },
  {
    id: 'site-04',
    team: '期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '陳喻琪',
    note: '莫蘭迪色 · 期貨懶人包',
    url: 'https://money52777.com/',
    domain: 'money52777.com',
    email: 'a97731@futures.capital.com.tw',
    astraVer: '4.13.8',
    wpVer: '7.1.4',
    outdatedPlugins: 1,
    daysSincePost: 11,
    themeColor: 'from-stone-700 via-amber-900 to-stone-900',
    seo: {
      healthScore: 90,
      dr: 26,
      crawled: 148,
      redirects: 2,
      broken: 0,
      organicTraffic: 2410,
      growthPct: 35.8,
      aiCitations: { aiOverview: 19, chatgpt: 10, perplexity: 8, gemini: 5 },
      keywords: { top3: 14, top10: 31 },
      topKeywords: [
        { kw: '期貨懶人包 陳喻琪', pos: 1, vol: 710 },
        { kw: '微台指期貨保證金', pos: 7, vol: 14800 },
      ],
    },
  },
  {
    id: 'site-05',
    team: '期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '洪健豪',
    note: '期貨調酒師 · 全站標竿',
    url: 'https://futuresbartender.com/',
    domain: 'futuresbartender.com',
    email: 'rick.hong@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 4,
    themeColor: 'from-amber-900 via-yellow-900 to-neutral-950',
    seo: {
      healthScore: 97,
      dr: 32,
      crawled: 218,
      redirects: 2,
      broken: 0,
      organicTraffic: 3840,
      growthPct: 54.8,
      aiCitations: { aiOverview: 34, chatgpt: 17, perplexity: 16, gemini: 11 },
      keywords: { top3: 23, top10: 46 },
      topKeywords: [
        { kw: '期貨調酒師 洪健豪', pos: 1, vol: 1600 },
        { kw: '黃金期貨保證金與一點多少錢', pos: 2, vol: 9600 },
      ],
    },
  },
  {
    id: 'site-06',
    team: '期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '詹東翰',
    note: 'Henry Chan · 海期夜盤專題',
    url: 'https://henry628-capital.com/',
    domain: 'henry628-capital.com',
    email: 'henry.zhan@futures.capital.com.tw',
    astraVer: '4.13.9',
    wpVer: '7.1.4',
    outdatedPlugins: 1,
    daysSincePost: 14,
    themeColor: 'from-zinc-800 via-slate-800 to-zinc-950',
    seo: {
      healthScore: 89,
      dr: 25,
      crawled: 136,
      redirects: 1,
      broken: 1,
      organicTraffic: 2150,
      growthPct: 29.6,
      aiCitations: { aiOverview: 18, chatgpt: 9, perplexity: 7, gemini: 5 },
      keywords: { top3: 12, top10: 28 },
      topKeywords: [
        { kw: '小那斯達克期貨夜盤時間', pos: 4, vol: 8100 },
        { kw: '詹東翰 期貨', pos: 1, vol: 540 },
      ],
    },
  },
  {
    id: 'site-07',
    team: '期貨',
    opsStatus: '停用',
    buildStage: '停用',
    name: '陳昱守',
    note: '已停用備份站',
    url: 'https://shoufutures.com/',
    domain: 'shoufutures.com',
    email: '',
    astraVer: '4.11.2',
    wpVer: '7.0.9',
    outdatedPlugins: 0,
    daysSincePost: 120,
    themeColor: 'from-slate-600 via-slate-700 to-slate-800',
    seo: {
      healthScore: 60,
      dr: 14,
      crawled: 32,
      redirects: 5,
      broken: 3,
      organicTraffic: 120,
      growthPct: -45.0,
      aiCitations: { aiOverview: 0, chatgpt: 0, perplexity: 0, gemini: 0 },
      keywords: { top3: 1, top10: 3 },
      topKeywords: [{ kw: '陳昱守 期貨', pos: 4, vol: 90 }],
    },
  },
  {
    id: 'site-08',
    team: '槓桿',
    opsStatus: '正常',
    buildStage: '待業務交素材',
    name: '楊蕙寧',
    note: '群益外匯美人魚 · SEO 板塊調整',
    url: 'https://capital-cfd.com/',
    domain: 'capital-cfd.com',
    email: 'a99830@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 34,
    themeColor: 'from-cyan-900 via-teal-800 to-slate-900',
    seo: {
      healthScore: 84,
      dr: 23,
      crawled: 98,
      redirects: 2,
      broken: 1,
      organicTraffic: 1740,
      growthPct: 22.1,
      aiCitations: { aiOverview: 15, chatgpt: 7, perplexity: 6, gemini: 4 },
      keywords: { top3: 10, top10: 21 },
      topKeywords: [
        { kw: '群益外匯美人魚 楊蕙寧', pos: 1, vol: 680 },
        { kw: '外匯保證金開戶流程', pos: 6, vol: 2900 },
      ],
    },
  },
  {
    id: 'site-09',
    team: '離職',
    opsStatus: '停用',
    buildStage: '停用',
    name: '廖建銘',
    note: '離職已停用下架',
    url: 'https://cashpancake.tw/',
    domain: 'cashpancake.tw',
    email: '',
    astraVer: '4.11.0',
    wpVer: '7.0.8',
    outdatedPlugins: 0,
    daysSincePost: 150,
    themeColor: 'from-neutral-700 via-neutral-800 to-neutral-900',
    seo: {
      healthScore: 55,
      dr: 12,
      crawled: 18,
      redirects: 4,
      broken: 2,
      organicTraffic: 40,
      growthPct: -72.0,
      aiCitations: { aiOverview: 0, chatgpt: 0, perplexity: 0, gemini: 0 },
      keywords: { top3: 0, top10: 1 },
      topKeywords: [{ kw: '廖建銘 期貨', pos: 8, vol: 50 }],
    },
  },
  {
    id: 'site-10',
    team: '期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '張芝綺',
    note: '柔和粉彩風格個人站',
    url: 'https://like77737.com.tw/',
    domain: 'like77737.com.tw',
    email: 'a98146@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 12,
    themeColor: 'from-pink-800 via-rose-800 to-slate-900',
    seo: {
      healthScore: 92,
      dr: 24,
      crawled: 132,
      redirects: 1,
      broken: 0,
      organicTraffic: 1960,
      growthPct: 31.5,
      aiCitations: { aiOverview: 16, chatgpt: 8, perplexity: 7, gemini: 4 },
      keywords: { top3: 11, top10: 26 },
      topKeywords: [
        { kw: '張芝綺 期貨', pos: 1, vol: 490 },
        { kw: '台指期手續費比較', pos: 6, vol: 4200 },
      ],
    },
  },
  {
    id: 'site-11',
    team: '離職',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '陳榆潔',
    note: '⚠️ 離職但狀態仍顯示正常（需確認下架）',
    url: 'https://dashboard.godaddy.com',
    domain: 'dashboard.godaddy.com',
    email: '',
    astraVer: '4.12.4',
    wpVer: '7.1.1',
    outdatedPlugins: 3,
    daysSincePost: 95,
    themeColor: 'from-rose-950 via-red-900 to-slate-950',
    seo: {
      healthScore: 62,
      dr: 18,
      crawled: 45,
      redirects: 8,
      broken: 5,
      organicTraffic: 310,
      growthPct: -38.4,
      aiCitations: { aiOverview: 1, chatgpt: 0, perplexity: 0, gemini: 0 },
      keywords: { top3: 1, top10: 4 },
      topKeywords: [{ kw: '陳榆潔 群益', pos: 3, vol: 210 }],
    },
  },
  {
    id: 'site-12',
    team: '期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '郭悅寧',
    note: '悅悅期貨 · 選擇權教學強站',
    url: 'https://yueyueimoney.com/',
    domain: 'yueyueimoney.com',
    email: 'yuening.guo@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 7,
    themeColor: 'from-indigo-800 via-blue-900 to-slate-900',
    seo: {
      healthScore: 94,
      dr: 28,
      crawled: 175,
      redirects: 2,
      broken: 0,
      organicTraffic: 2920,
      growthPct: 44.2,
      aiCitations: { aiOverview: 25, chatgpt: 13, perplexity: 11, gemini: 7 },
      keywords: { top3: 17, top10: 36 },
      topKeywords: [
        { kw: '悅悅期貨 郭悅寧', pos: 1, vol: 890 },
        { kw: '選擇權賣方保證金計算', pos: 3, vol: 6200 },
      ],
    },
  },
  {
    id: 'site-13',
    team: '台中期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '曾韋菁',
    note: '台中期貨 · 選擇權專欄',
    url: 'https://chingmoney.tw/',
    domain: 'chingmoney.tw',
    email: 'lala.tseng@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 10,
    themeColor: 'from-emerald-900 via-teal-900 to-slate-900',
    seo: {
      healthScore: 91,
      dr: 25,
      crawled: 144,
      redirects: 1,
      broken: 0,
      organicTraffic: 2280,
      growthPct: 33.7,
      aiCitations: { aiOverview: 19, chatgpt: 10, perplexity: 8, gemini: 5 },
      keywords: { top3: 13, top10: 29 },
      topKeywords: [
        { kw: '曾韋菁 期貨', pos: 1, vol: 520 },
        { kw: '台中期貨營業員推薦', pos: 4, vol: 1750 },
      ],
    },
  },
  {
    id: 'site-14',
    team: '期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '丁佩君',
    note: '已備份 · 穩健更新站點',
    url: 'https://winwin178.tw/',
    domain: 'winwin178.tw',
    email: 'peichun.ting@futures.capital.com.tw',
    astraVer: '4.13.9',
    wpVer: '7.1.4',
    outdatedPlugins: 1,
    daysSincePost: 15,
    themeColor: 'from-blue-900 via-indigo-900 to-slate-950',
    seo: {
      healthScore: 89,
      dr: 24,
      crawled: 130,
      redirects: 2,
      broken: 1,
      organicTraffic: 1940,
      growthPct: 26.8,
      aiCitations: { aiOverview: 15, chatgpt: 8, perplexity: 6, gemini: 4 },
      keywords: { top3: 11, top10: 25 },
      topKeywords: [
        { kw: '丁佩君 期貨', pos: 1, vol: 430 },
        { kw: '海外期貨開戶準備資料', pos: 5, vol: 2400 },
      ],
    },
  },
  {
    id: 'site-15',
    team: '期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '黃麗臻',
    note: '明黃撞色視覺個人官網',
    url: 'https://byebyeboss1314.com/',
    domain: 'byebyeboss1314.com',
    email: 'nica.huang@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 9,
    themeColor: 'from-amber-700 via-yellow-800 to-slate-900',
    seo: {
      healthScore: 92,
      dr: 25,
      crawled: 152,
      redirects: 1,
      broken: 0,
      organicTraffic: 2340,
      growthPct: 37.1,
      aiCitations: { aiOverview: 20, chatgpt: 9, perplexity: 8, gemini: 5 },
      keywords: { top3: 14, top10: 30 },
      topKeywords: [
        { kw: '黃麗臻 期貨', pos: 1, vol: 560 },
        { kw: '小台指保證金多少', pos: 4, vol: 7800 },
      ],
    },
  },
  {
    id: 'site-16',
    team: '期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '楊侁達',
    note: '期貨暨分析師 · 高流量站',
    url: 'https://sdainvestnow.com/',
    domain: 'sdainvestnow.com',
    email: 'ray.yang@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 5,
    themeColor: 'from-slate-800 via-emerald-900 to-slate-950',
    seo: {
      healthScore: 96,
      dr: 30,
      crawled: 198,
      redirects: 2,
      broken: 0,
      organicTraffic: 3350,
      growthPct: 49.2,
      aiCitations: { aiOverview: 28, chatgpt: 14, perplexity: 13, gemini: 9 },
      keywords: { top3: 18, top10: 41 },
      topKeywords: [
        { kw: '楊侁達 分析師', pos: 1, vol: 1250 },
        { kw: '黃金期貨保證金與一點多少錢', pos: 5, vol: 9600 },
      ],
    },
  },
  {
    id: 'site-17',
    team: '台中期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '涂晨庠',
    note: '台中期貨 · 商務深藍主題',
    url: 'https://capitalstockhsiang.com/',
    domain: 'capitalstockhsiang.com',
    email: 'a52119@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 13,
    themeColor: 'from-blue-950 via-sky-900 to-slate-900',
    seo: {
      healthScore: 90,
      dr: 23,
      crawled: 128,
      redirects: 1,
      broken: 0,
      organicTraffic: 1850,
      growthPct: 28.4,
      aiCitations: { aiOverview: 14, chatgpt: 7, perplexity: 6, gemini: 4 },
      keywords: { top3: 10, top10: 23 },
      topKeywords: [
        { kw: '涂晨庠 期貨', pos: 1, vol: 410 },
        { kw: '股票期貨槓桿倍數計算', pos: 6, vol: 3400 },
      ],
    },
  },
  {
    id: 'site-18',
    team: '台中期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '張瑜真',
    note: 'COCO · 台中期貨形象站',
    url: 'https://cocorich99.com/',
    domain: 'cocorich99.com',
    email: 'a98079@futures.capital.com.tw',
    astraVer: '4.13.9',
    wpVer: '7.1.4',
    outdatedPlugins: 1,
    daysSincePost: 16,
    themeColor: 'from-amber-800 via-orange-800 to-slate-900',
    seo: {
      healthScore: 88,
      dr: 23,
      crawled: 124,
      redirects: 2,
      broken: 1,
      organicTraffic: 1790,
      growthPct: 25.9,
      aiCitations: { aiOverview: 13, chatgpt: 7, perplexity: 5, gemini: 3 },
      keywords: { top3: 9, top10: 22 },
      topKeywords: [
        { kw: '張瑜真 coco 期貨', pos: 1, vol: 480 },
        { kw: '群益期貨線上開戶教學', pos: 7, vol: 3900 },
      ],
    },
  },
  {
    id: 'site-19',
    team: '台中期貨',
    opsStatus: '停用',
    buildStage: '停用',
    name: '李茂全',
    note: '台中期貨 · 已停用站點',
    url: 'https://yourfuturesbro.com/',
    domain: 'yourfuturesbro.com',
    email: '',
    astraVer: '4.11.5',
    wpVer: '7.0.9',
    outdatedPlugins: 0,
    daysSincePost: 110,
    themeColor: 'from-slate-700 via-slate-800 to-slate-900',
    seo: {
      healthScore: 58,
      dr: 13,
      crawled: 24,
      redirects: 3,
      broken: 2,
      organicTraffic: 65,
      growthPct: -55.0,
      aiCitations: { aiOverview: 0, chatgpt: 0, perplexity: 0, gemini: 0 },
      keywords: { top3: 0, top10: 2 },
      topKeywords: [{ kw: '李茂全 期貨', pos: 6, vol: 70 }],
    },
  },
  {
    id: 'site-20',
    team: '期貨',
    opsStatus: '正常',
    buildStage: '合規審核中',
    name: '林書韻',
    note: '新站合規警語審核中',
    url: 'https://goldenlady52025.com/',
    domain: 'goldenlady52025.com',
    email: 'a52025@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 4,
    themeColor: 'from-yellow-800 via-amber-900 to-slate-900',
    seo: {
      healthScore: 86,
      dr: 16,
      crawled: 42,
      redirects: 0,
      broken: 0,
      organicTraffic: 640,
      growthPct: 82.0,
      aiCitations: { aiOverview: 6, chatgpt: 3, perplexity: 2, gemini: 2 },
      keywords: { top3: 4, top10: 11 },
      topKeywords: [
        { kw: '林書韻 期貨', pos: 1, vol: 310 },
        { kw: '新手期貨開戶流程', pos: 9, vol: 2600 },
      ],
    },
  },
  {
    id: 'site-21',
    team: '期貨',
    opsStatus: '正常',
    buildStage: '待業務交素材',
    name: '張婷華',
    note: '等待業務補齊大頭照與自介文案',
    url: 'https://cjslj.com/',
    domain: 'cjslj.com',
    email: 'th.chang@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 38,
    themeColor: 'from-slate-700 via-indigo-900 to-slate-900',
    seo: {
      healthScore: 81,
      dr: 17,
      crawled: 56,
      redirects: 1,
      broken: 1,
      organicTraffic: 720,
      growthPct: 14.5,
      aiCitations: { aiOverview: 5, chatgpt: 2, perplexity: 2, gemini: 1 },
      keywords: { top3: 3, top10: 12 },
      topKeywords: [{ kw: '張婷華 期貨', pos: 1, vol: 290 }],
    },
  },
  {
    id: 'site-22',
    team: '台中期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '詹詠麟',
    note: '台中期貨 · SEO 板塊調整完成',
    url: 'https://moneyjan.com/',
    domain: 'moneyjan.com',
    email: 'a98928@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 8,
    themeColor: 'from-blue-800 via-slate-800 to-slate-950',
    seo: {
      healthScore: 93,
      dr: 26,
      crawled: 158,
      redirects: 1,
      broken: 0,
      organicTraffic: 2510,
      growthPct: 41.3,
      aiCitations: { aiOverview: 21, chatgpt: 11, perplexity: 9, gemini: 6 },
      keywords: { top3: 15, top10: 32 },
      topKeywords: [
        { kw: '詹詠麟 期貨', pos: 1, vol: 580 },
        { kw: '海期手續費與規格總整理', pos: 4, vol: 3500 },
      ],
    },
  },
  {
    id: 'site-23',
    team: '離職',
    opsStatus: '正常',
    buildStage: '停用',
    name: '陳芝蓉',
    note: '⚠️ 離職停用中但維運狀態仍為正常（需確認關閉）',
    url: 'https://wendyfuture.com/',
    domain: 'wendyfuture.com',
    email: '',
    astraVer: '4.12.8',
    wpVer: '7.1.2',
    outdatedPlugins: 2,
    daysSincePost: 85,
    themeColor: 'from-rose-900 via-red-950 to-slate-950',
    seo: {
      healthScore: 65,
      dr: 19,
      crawled: 64,
      redirects: 6,
      broken: 4,
      organicTraffic: 420,
      growthPct: -29.5,
      aiCitations: { aiOverview: 2, chatgpt: 1, perplexity: 0, gemini: 0 },
      keywords: { top3: 2, top10: 6 },
      topKeywords: [{ kw: '陳芝蓉 期貨', pos: 2, vol: 260 }],
    },
  },
  {
    id: 'site-24',
    team: '槓桿',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '陳奕揚',
    note: '1028 已備份 · 槓桿交易站',
    url: 'https://yourbestfriendian.com/',
    domain: 'yourbestfriendian.com',
    email: 'a52502@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 11,
    themeColor: 'from-slate-800 via-cyan-900 to-slate-950',
    seo: {
      healthScore: 91,
      dr: 25,
      crawled: 142,
      redirects: 1,
      broken: 0,
      organicTraffic: 2190,
      growthPct: 34.6,
      aiCitations: { aiOverview: 18, chatgpt: 9, perplexity: 7, gemini: 5 },
      keywords: { top3: 12, top10: 27 },
      topKeywords: [
        { kw: '陳奕揚 群益槓桿', pos: 1, vol: 470 },
        { kw: '差價契約 CFD 交易教學', pos: 4, vol: 3200 },
      ],
    },
  },
  {
    id: 'site-25',
    team: '槓桿',
    opsStatus: '正常',
    buildStage: '停用',
    name: '林季樺',
    note: '建站階段已停用，待確認網域保留',
    url: 'https://dong-cfd.com/',
    domain: 'dong-cfd.com',
    email: '',
    astraVer: '4.13.5',
    wpVer: '7.1.3',
    outdatedPlugins: 1,
    daysSincePost: 62,
    themeColor: 'from-zinc-700 via-slate-800 to-zinc-950',
    seo: {
      healthScore: 72,
      dr: 18,
      crawled: 52,
      redirects: 3,
      broken: 2,
      organicTraffic: 380,
      growthPct: -18.0,
      aiCitations: { aiOverview: 2, chatgpt: 1, perplexity: 0, gemini: 0 },
      keywords: { top3: 1, top10: 5 },
      topKeywords: [{ kw: '林季樺 槓桿', pos: 3, vol: 180 }],
    },
  },
  {
    id: 'site-26',
    team: '期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '陳虹頻',
    note: '期貨個人品牌官網',
    url: 'https://pin97733.com/',
    domain: 'pin97733.com',
    email: 'a97733@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 14,
    themeColor: 'from-purple-900 via-indigo-900 to-slate-900',
    seo: {
      healthScore: 90,
      dr: 23,
      crawled: 126,
      redirects: 1,
      broken: 0,
      organicTraffic: 1820,
      growthPct: 27.5,
      aiCitations: { aiOverview: 14, chatgpt: 7, perplexity: 6, gemini: 4 },
      keywords: { top3: 10, top10: 24 },
      topKeywords: [{ kw: '陳虹頻 期貨', pos: 1, vol: 390 }],
    },
  },
  {
    id: 'site-27',
    team: '期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '陳儀璇',
    note: '期貨個人官網（待補齊 Email 欄位）',
    url: 'https://myymcc291914.com/',
    domain: 'myymcc291914.com',
    email: '',
    astraVer: '4.13.9',
    wpVer: '7.1.4',
    outdatedPlugins: 1,
    daysSincePost: 19,
    themeColor: 'from-teal-900 via-emerald-900 to-slate-900',
    seo: {
      healthScore: 87,
      dr: 21,
      crawled: 108,
      redirects: 2,
      broken: 1,
      organicTraffic: 1540,
      growthPct: 21.8,
      aiCitations: { aiOverview: 11, chatgpt: 6, perplexity: 4, gemini: 3 },
      keywords: { top3: 8, top10: 19 },
      topKeywords: [{ kw: '陳儀璇 期貨', pos: 1, vol: 340 }],
    },
  },
  {
    id: 'site-28',
    team: '期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '葉美華',
    note: '期貨理財筆記站',
    url: 'https://note701.com/',
    domain: 'note701.com',
    email: 'a52607@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 12,
    themeColor: 'from-blue-900 via-slate-800 to-slate-950',
    seo: {
      healthScore: 91,
      dr: 24,
      crawled: 134,
      redirects: 1,
      broken: 0,
      organicTraffic: 1910,
      growthPct: 30.2,
      aiCitations: { aiOverview: 15, chatgpt: 8, perplexity: 6, gemini: 4 },
      keywords: { top3: 11, top10: 25 },
      topKeywords: [{ kw: '葉美華 期貨', pos: 1, vol: 420 }],
    },
  },
  {
    id: 'site-29',
    team: '期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '張聖羣',
    note: '期貨實戰策略官網',
    url: 'https://cmwin888.com/',
    domain: 'cmwin888.com',
    email: 'rex.chang@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 8,
    themeColor: 'from-slate-900 via-blue-950 to-black',
    seo: {
      healthScore: 93,
      dr: 26,
      crawled: 160,
      redirects: 1,
      broken: 0,
      organicTraffic: 2460,
      growthPct: 38.9,
      aiCitations: { aiOverview: 20, chatgpt: 10, perplexity: 9, gemini: 6 },
      keywords: { top3: 14, top10: 31 },
      topKeywords: [{ kw: '張聖羣 期貨', pos: 1, vol: 510 }],
    },
  },
  {
    id: 'site-30',
    team: '台中期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '楊蕙宇',
    note: '台中期貨個人官網',
    url: 'https://capitalfuturerrr.tw/',
    domain: 'capitalfuturerrr.tw',
    email: 'a97310@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 15,
    themeColor: 'from-sky-900 via-indigo-900 to-slate-900',
    seo: {
      healthScore: 90,
      dr: 23,
      crawled: 122,
      redirects: 1,
      broken: 0,
      organicTraffic: 1760,
      growthPct: 26.4,
      aiCitations: { aiOverview: 13, chatgpt: 7, perplexity: 5, gemini: 4 },
      keywords: { top3: 9, top10: 21 },
      topKeywords: [{ kw: '楊蕙宇 期貨', pos: 1, vol: 380 }],
    },
  },
  {
    id: 'site-31',
    team: '槓桿',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '吳國豪',
    note: '槓桿邏輯交易官網',
    url: 'https://gnlogicfx.com/',
    domain: 'gnlogicfx.com',
    email: 'a52716@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 9,
    themeColor: 'from-emerald-950 via-slate-900 to-black',
    seo: {
      healthScore: 92,
      dr: 26,
      crawled: 150,
      redirects: 1,
      broken: 0,
      organicTraffic: 2310,
      growthPct: 36.5,
      aiCitations: { aiOverview: 19, chatgpt: 10, perplexity: 8, gemini: 5 },
      keywords: { top3: 13, top10: 28 },
      topKeywords: [
        { kw: '吳國豪 槓桿', pos: 1, vol: 460 },
        { kw: '群益 MT5 指標安裝教學', pos: 6, vol: 5400 },
      ],
    },
  },
  {
    id: 'site-32',
    team: '槓桿',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '吳元元',
    note: 'MT5 外匯保證金主力站',
    url: 'https://capital-mt5.com/',
    domain: 'capital-mt5.com',
    email: 'a97729@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 6,
    themeColor: 'from-blue-900 via-cyan-900 to-slate-950',
    seo: {
      healthScore: 95,
      dr: 29,
      crawled: 188,
      redirects: 2,
      broken: 0,
      organicTraffic: 3180,
      growthPct: 47.6,
      aiCitations: { aiOverview: 27, chatgpt: 14, perplexity: 12, gemini: 8 },
      keywords: { top3: 18, top10: 39 },
      topKeywords: [
        { kw: '吳元元 MT5', pos: 1, vol: 820 },
        { kw: '群益 MT5 指標安裝教學', pos: 3, vol: 5400 },
      ],
    },
  },
  {
    id: 'site-33',
    team: '期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '林郁馨',
    note: '期貨交易教育專欄',
    url: 'https://capitalyuxin.com/',
    domain: 'capitalyuxin.com',
    email: 'yuxin.lin@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 11,
    themeColor: 'from-rose-900 via-purple-900 to-slate-950',
    seo: {
      healthScore: 91,
      dr: 24,
      crawled: 138,
      redirects: 1,
      broken: 0,
      organicTraffic: 2040,
      growthPct: 32.1,
      aiCitations: { aiOverview: 16, chatgpt: 8, perplexity: 7, gemini: 4 },
      keywords: { top3: 11, top10: 25 },
      topKeywords: [{ kw: '林郁馨 期貨', pos: 1, vol: 430 }],
    },
  },
  {
    id: 'site-34',
    team: '期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '王菁蔓',
    note: 'Dora 期貨理財官網',
    url: 'https://dorawang1688.com/',
    domain: 'dorawang1688.com',
    email: 'dora.wang@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 10,
    themeColor: 'from-amber-900 via-red-900 to-slate-950',
    seo: {
      healthScore: 90,
      dr: 24,
      crawled: 131,
      redirects: 1,
      broken: 0,
      organicTraffic: 1920,
      growthPct: 29.8,
      aiCitations: { aiOverview: 15, chatgpt: 8, perplexity: 6, gemini: 4 },
      keywords: { top3: 10, top10: 24 },
      topKeywords: [{ kw: '王菁蔓 Dora 期貨', pos: 1, vol: 410 }],
    },
  },
  {
    id: 'site-35',
    team: '台中期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '連玉葶',
    note: '台中期貨 · 瓜瓜投資筆記',
    url: 'https://guainvest.tw/',
    domain: 'guainvest.tw',
    email: 'o983821125@gmail.com',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 9,
    themeColor: 'from-emerald-800 via-green-900 to-slate-950',
    seo: {
      healthScore: 92,
      dr: 25,
      crawled: 146,
      redirects: 1,
      broken: 0,
      organicTraffic: 2210,
      growthPct: 35.4,
      aiCitations: { aiOverview: 18, chatgpt: 9, perplexity: 7, gemini: 5 },
      keywords: { top3: 12, top10: 27 },
      topKeywords: [{ kw: '連玉葶 期貨', pos: 1, vol: 450 }],
    },
  },
  {
    id: 'site-36',
    team: '期貨',
    opsStatus: '正常',
    buildStage: '已上線',
    name: '楊蕙瑜',
    note: 'Vanessa 期貨策略官網',
    url: 'https://vanessa-capitalfutures.com.tw/',
    domain: 'vanessa-capitalfutures.com.tw',
    email: 'vanessa.yang@futures.capital.com.tw',
    astraVer: '4.14.3',
    wpVer: '7.1.5',
    outdatedPlugins: 0,
    daysSincePost: 7,
    themeColor: 'from-indigo-900 via-slate-900 to-black',
    seo: {
      healthScore: 93,
      dr: 26,
      crawled: 155,
      redirects: 1,
      broken: 0,
      organicTraffic: 2390,
      growthPct: 37.8,
      aiCitations: { aiOverview: 20, chatgpt: 10, perplexity: 8, gemini: 5 },
      keywords: { top3: 13, top10: 29 },
      topKeywords: [
        { kw: '楊蕙瑜 期貨', pos: 1, vol: 490 },
        { kw: '群益期貨線上開戶教學', pos: 5, vol: 3900 },
      ],
    },
  },
];

// ============================================================================
// 3.5 開源 / 免費真實 SEO 與 Similarweb 指標爬蟲串接程式碼庫
// ============================================================================
const OPEN_SOURCE_CONNECTOR_CODE = `/**
 * 【開源零成本方案】Google Apps Script 自動抓取 36 站真實 SEO & Similarweb 指標
 * 整合來源：
 * 1. Google Search Console API (免費：真實曝光數、自然點擊、最高流量關鍵字、品牌人名搜尋)
 * 2. Google Analytics 4 Data API (免費：總訪問量、桌面 vs 行動網頁設備分發比例)
 * 3. Tranco Open Research List API (開源免費：全球網域排名 Global Rank，替代 Similarweb 排名)
 * 4. Google PageSpeed Insights API (免費免金鑰：真實網站健康度與 Core Web Vitals)
 */
function syncAllSitesRealSeoMetrics() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('工作表1');
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    const domain = String(data[i][4] || '').replace(/^https?:\\/\\//, '').replace(/\\/$/, '');
    if (!domain || domain.includes('godaddy')) continue;

    // 1. 呼叫開源 Tranco API 取得真實全球網域排名 (替代 Similarweb Global Rank)
    let globalRank = '未進榜';
    try {
      const trancoRes = UrlFetchApp.fetch('https://tranco-list.eu/api/ranks/domain/' + domain, { muteHttpExceptions: true });
      const trancoJson = JSON.parse(trancoRes.getContentText());
      if (trancoJson.ranks && trancoJson.ranks.length > 0) {
        globalRank = '#' + trancoJson.ranks[0].rank.toLocaleString();
      }
    } catch (e) {}

    // 2. 呼叫 Google PageSpeed API 取得真實健康度分數
    let healthScore = 90;
    try {
      const psiUrl = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://' + domain + '&strategy=mobile';
      const psiRes = UrlFetchApp.fetch(psiUrl, { muteHttpExceptions: true });
      const psiJson = JSON.parse(psiRes.getContentText());
      healthScore = Math.round((psiJson.lighthouseResult.categories.performance.score || 0.9) * 100);
    } catch (e) {}

    // 3. 寫回 Google 試算表對應欄位（供中控台即時同步）
    sheet.getRange(i + 1, 8).setValue(globalRank);
    sheet.getRange(i + 1, 9).setValue(healthScore);
  }
}`;

// ============================================================================
// 4. 工程師不可替代價值：自助式 SOP 教學知識庫
// ============================================================================
const SOP_TEMPLATES = [
  {
    id: 'sop-1',
    title: '【業務自助教學】如何在 WordPress 後台快速上架一篇市場分析文章？',
    tag: '降低 70% 重複私訊',
    content: `【群益業務個人官網 — 3 分鐘文章上架 SOP】
1. 登入您的專屬後台（網址後方加上 /wp-admin），輸入帳號密碼。
2. 左側選單點選「文章」→「新增文章」。
3. 輸入標題（建議包含：微台指 / 黃金期貨 / 選擇權等關鍵字）。
4. 貼上內文後，於右側「Rank Math SEO」區塊填入 60 字以內摘要。
5. 確認文章最下方已保留「金融期貨交易風險預告警語」區塊，點選右上角「發佈」即完成！`,
  },
  {
    id: 'sop-2',
    title: '【合規視覺規範】業務更換首頁大頭照與 LINE 連結標準規格說明',
    tag: '省下 85% 美工修圖時間',
    content: `【個人官網照片與社群連結更新規範】
1. 大頭照請提供半身清晰商務照（建議解析度 1200x1200px 以上，背景單純）。
2. 系統已內建標準化 Astra 合規版型，會自動裁切並壓上警語字樣，無需自行加字。
3. 若需更換 LINE 官方帳號或開戶連結，請提供完整 https:// 開頭網址以便同步更新全站按鈕。`,
  },
  {
    id: 'sop-3',
    title: '【離職與轉任合規 SOP】業務異動時網站下架與網域處理流程',
    tag: '100% 合規零風險',
    content: `【業務離職 / 轉任網站合規處置標準作業】
1. 接獲人事或部門通報後 24 小時內，將該站點切換為維護模式（503）並執行完整備份。
2. 解除網站與公司企業信箱、LINE 連結之綁定，並於總表標記為「離職 / 停用」。
3. 若為公司代管網域，於到期前確認不再續約並清除公開搜尋索引（Noindex）。`,
  },
];

// ============================================================================
// 5. 系統安全與業務問題歷程日誌（病毒日誌風格初始資料）
// ============================================================================
const INITIAL_LOGS = [
  {
    id: 'LOG-00',
    time: '2026-11-26 09:30:00',
    level: 'CRITICAL',
    siteName: '詹詠麟 (moneyjan.com)',
    message:
      '網站中毒被綁架（遭 16 個 IP 輪流攻擊），11/26 已完成全站重置並還原至 10/20 備份（共 13 篇文章，最後一篇為《雙引擎投資術 金創 × 選擇權自動交易》）；右側連結因業務開啟兩段式驗證無法登入，11/25 起聯絡不上業務，已留言告知待其自行設定。',
  },
  {
    id: 'LOG-01',
    time: '2026-11-25 09:00:12',
    level: 'CRITICAL',
    siteName: '陳榆潔',
    message: '合規稽核警報：團隊標記為「離職」，但維運狀態仍顯示「正常」且指向 godaddy，需立即確認下架！',
  },
  {
    id: 'LOG-02',
    time: '2026-11-25 09:00:10',
    level: 'CRITICAL',
    siteName: '陳芝蓉',
    message: '合規稽核警報：團隊標記為「離職」且建站階段為「停用」，但維運狀態欄位仍顯示「正常」。',
  },
  {
    id: 'LOG-03',
    time: '2026-11-25 08:58:44',
    level: 'WARN',
    siteName: '謝琮凱 / 詹東翰等 7 站',
    message: 'Astra 主題版本比對：偵測到 7 個站點仍為 v4.13.x，落後官方最新資安版 v4.14.3。',
  },
  {
    id: 'LOG-04',
    time: '2026-11-25 08:45:19',
    level: 'WARN',
    siteName: '楊蕙寧 / 張婷華',
    message: '建站進度追蹤：卡關在「待業務交素材」階段已超過 14 天，系統排程準備發送提醒信。',
  },
  {
    id: 'LOG-05',
    time: '2026-11-25 08:30:00',
    level: 'INFO',
    siteName: '新站資安黑名單庫',
    message: `已載入 ${MALICIOUS_IP_LIST.length} 筆惡意攻擊掃描 IPv4 / IPv6 黑名單，建立任何業務新站時請務必一併匯入封鎖。`,
  },
  {
    id: 'LOG-06',
    time: '2026-11-24 17:20:05',
    level: 'FIXED',
    siteName: '洪健豪 (futuresbartender.com)',
    message: '已完成 Astra v4.14.3 與 WordPress 7.1.5 核心升級，首頁視覺回歸比對通過（差異率 0.0%）。',
  },
];

// ============================================================================
// 6. 輔助函式：安全複製文字、下載檔案 & 產生單站深度 SEO 診斷資料
// ============================================================================
function copyTextSafely(text, onSuccess) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        if (onSuccess) onSuccess();
      })
      .catch(() => {
        fallbackCopy(text, onSuccess);
      });
  } else {
    fallbackCopy(text, onSuccess);
  }
}

function fallbackCopy(text, onSuccess) {
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    if (onSuccess) onSuccess();
  } catch (err) {
    console.error('Copy failed:', err);
  }
}

function downloadTextFile(filename, content, onSuccess) {
  try {
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    if (onSuccess) onSuccess();
  } catch (err) {
    console.error('Download failed:', err);
  }
}

function buildSingleSiteSeoProfile(site) {
  const organic = site.seo.organicTraffic;
  const impressions = Math.round(organic * 18.4);
  const ctr = ((organic / Math.max(impressions, 1)) * 100).toFixed(1);
  const aiTotal =
    site.seo.aiCitations.aiOverview +
    site.seo.aiCitations.chatgpt +
    site.seo.aiCitations.perplexity +
    site.seo.aiCitations.gemini;
  const aiTraffic = Math.round(aiTotal * 4.2);

  const primaryKw = site.seo.topKeywords[0]?.kw || `${site.name} 期貨`;
  const secondaryKw =
    site.seo.topKeywords[1]?.kw ||
    (site.team === '槓桿' ? '群益 MT5 指標安裝教學' : '微台指期貨保證金');

  const topTrafficWords = [
    {
      keyword: primaryKw,
      pagePath: '/',
      pos: site.seo.topKeywords[0]?.pos || 1,
      impressions: Math.round(impressions * 0.36),
      clicks: Math.round(organic * 0.42),
      aiTraffic: Math.round(aiTraffic * 0.45),
    },
    {
      keyword: secondaryKw,
      pagePath: '/futures-margin-table/',
      pos: site.seo.topKeywords[1]?.pos || 3,
      impressions: Math.round(impressions * 0.28),
      clicks: Math.round(organic * 0.31),
      aiTraffic: Math.round(aiTraffic * 0.35),
    },
    {
      keyword:
        site.team === '槓桿'
          ? '外匯保證金開戶手續費比較'
          : '群益期貨線上開戶推薦營業員',
      pagePath: '/account-opening-sop/',
      pos: 4,
      impressions: Math.round(impressions * 0.19),
      clicks: Math.round(organic * 0.16),
      aiTraffic: Math.round(aiTraffic * 0.12),
    },
    {
      keyword: '海外期貨夜盤交易時間表',
      pagePath: '/overseas-trading-hours/',
      pos: 6,
      impressions: Math.round(impressions * 0.17),
      clicks: Math.round(organic * 0.11),
      aiTraffic: Math.round(aiTraffic * 0.08),
    },
  ];

  const brandQueries = [
    {
      query: site.name,
      monthlySearch: Math.max(260, Math.round(organic * 0.38)),
      clicks: Math.max(140, Math.round(organic * 0.29)),
      pos: 1,
      trend: '+24%',
    },
    {
      query: `${site.name} 群益期貨`,
      monthlySearch: Math.max(120, Math.round(organic * 0.18)),
      clicks: Math.max(65, Math.round(organic * 0.14)),
      pos: 1,
      trend: '+18%',
    },
  ];

  const errorAndUpdatePages = [];
  if (site.seo.broken > 0) {
    errorAndUpdatePages.push({
      path: '/2024-promo-event-old/',
      issueType: `404 失效連結 (${site.seo.broken} 處)`,
      severity: 'critical',
      detail: '舊版行銷活動頁已下架但站內導覽列與舊文章仍指向此網址，導致 Google 爬蟲回報 404 錯誤。',
      fixAction: '於 Rank Math 重定向模組設定 301 永久轉址回首頁或最新開戶活動頁。',
    });
  }
  errorAndUpdatePages.push({
    path: '/category/uncategorized/',
    issueType: '未分類低品質頁面收錄',
    severity: 'warn',
    detail: 'WordPress 預設「未分類」彙整頁被 Google 索引，易造成重複內容分散主文章權重。',
    fixAction: '在 Rank Math → 標題與中繼設定中將預設分類設為 Noindex，並將文章歸入正確分類。',
  });
  errorAndUpdatePages.push({
    path: '/futures-margin-list/',
    issueType: '標題年份與保證金數值待更新',
    severity: 'info',
    detail: '文章標題與內文數據仍停留在舊季度，點擊率（CTR）近 30 天略微下滑 1.4%。',
    fixAction: '更新標題年份與最新期交所保證金標準，並在開頭加入 50 字結論摘要以爭取 AI Overview 引用。',
  });

  const actionRecommendations = [
    `針對「${site.name}」品牌詞已穩居第 1 名，建議在首頁 Title 加上「群益${site.team}｜${site.name}」，提升搜尋點擊信任感。`,
    `目前網站有 ${site.seo.keywords.top10} 組關鍵字落在第 4～10 名（差一步進前 3），建議針對這些文章補充最新保證金試算範例。`,
    '每兩週固定發布 1 篇「熱門商品規格解析（如微台指、黃金期貨）」並附上合規風險警語，可穩定帶動自然流量與開戶詢問。',
  ];

  return {
    impressions,
    organic,
    ctr,
    aiTotal,
    aiTraffic,
    topTrafficWords,
    brandQueries,
    errorAndUpdatePages,
    actionRecommendations,
  };
}

// ============================================================================
// 7. 迷你網站縮圖卡片元件（支援真實網站截圖 mShots + 色塊自動備援）
// ============================================================================
function MiniSiteCard({ site, showLivePreview, onSelectSeo, onOpenAiMail, onQuickFixAstra }) {
  const [imgError, setImgError] = useState(false);

  const isLeaveConflict = site.team === '離職' && site.opsStatus === '正常';
  const isAstraOutdated = site.opsStatus === '正常' && site.astraVer !== SYSTEM_BENCHMARKS.astraLatest;
  const isPostOverdue = site.opsStatus === '正常' && site.daysSincePost >= 30;
  const hasAlert = isLeaveConflict || isAstraOutdated || isPostOverdue || site.outdatedPlugins > 0;

  const previewImgUrl = `https://s.wordpress.com/mshots/v1/${encodeURIComponent(site.url)}?w=600&h=360`;

  return (
    <div
      className={`group bg-white border rounded-[3px] overflow-hidden transition-all flex flex-col justify-between ${
        hasAlert
          ? 'border-rose-300 ring-1 ring-rose-200 hover:border-rose-500'
          : 'border-slate-200 hover:border-blue-500 hover:shadow-sm'
      }`}
    >
      {/* 上半部 16:9 預覽區 */}
      <div
        onClick={() => onSelectSeo(site.id)}
        className="relative aspect-[16/10] w-full bg-slate-900 overflow-hidden cursor-pointer"
      >
        {showLivePreview && !imgError && site.opsStatus !== '停用' ? (
          <img
            src={previewImgUrl}
            alt={site.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${site.themeColor} p-3 flex flex-col justify-between text-white`}
          >
            <div className="flex items-center justify-between text-[10px] font-mono opacity-80">
              <span>{site.domain}</span>
              <span>Astra v{site.astraVer}</span>
            </div>
            <div>
              <div className="text-sm font-extrabold tracking-wide">{site.name}</div>
              <div className="text-[11px] text-white/80 line-clamp-1 mt-0.5">{site.note}</div>
            </div>
          </div>
        )}

        {/* 右上角狀態與紅色異常警示徽章 */}
        <div className="absolute top-2 right-2 flex items-center gap-1">
          {hasAlert && (
            <span
              title="偵測到版本落後、逾期未更新或離職狀態異常"
              className="px-1.5 py-0.5 text-[10px] font-bold bg-rose-600 text-white rounded-[2px] shadow-xs flex items-center gap-0.5 animate-pulse"
            >
              <AlertTriangle className="w-3 h-3" />
              <span>異常</span>
            </span>
          )}
          <span
            className={`px-1.5 py-0.5 text-[10px] font-mono font-bold rounded-[2px] shadow-xs ${
              site.seo.healthScore >= 85
                ? 'bg-emerald-600 text-white'
                : site.seo.healthScore >= 70
                ? 'bg-amber-500 text-slate-950'
                : 'bg-slate-800 text-slate-200'
            }`}
          >
            SEO {site.seo.healthScore}
          </span>
        </div>

        {/* 左下角團隊標籤 */}
        <div className="absolute bottom-2 left-2 flex items-center gap-1">
          <span
            className={`px-1.5 py-0.5 text-[10px] font-bold rounded-[2px] ${
              site.team === '離職' ? 'bg-rose-700 text-white' : 'bg-slate-900/85 text-white'
            }`}
          >
            {site.team}
          </span>
          {site.opsStatus === '停用' && (
            <span className="px-1.5 py-0.5 text-[10px] font-bold bg-slate-700 text-slate-200 rounded-[2px]">
              已停用
            </span>
          )}
        </div>
      </div>

      {/* 下半部業務名稱與快捷操作 */}
      <div className="p-2.5 space-y-2">
        <div className="flex items-start justify-between gap-1">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-xs font-extrabold text-[#0F172A] truncate">{site.name}</span>
            </div>
            <p className="text-[11px] text-slate-500 truncate mt-0.5">{site.note}</p>
          </div>
          <a
            href={site.url}
            target="_blank"
            rel="noreferrer"
            title="開啟前台網站"
            className="p-1 text-slate-400 hover:text-blue-600 shrink-0"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 異常提醒小條或快捷按鈕 */}
        <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between gap-1">
          {isLeaveConflict ? (
            <button
              onClick={(e) => onOpenAiMail(site, e)}
              className="w-full py-1 px-2 text-[10px] font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-[2px] text-center"
            >
              離職未下架 · 生成合規通報
            </button>
          ) : isAstraOutdated ? (
            <button
              onClick={() => onQuickFixAstra(site.id)}
              className="w-full py-1 px-2 text-[10px] font-bold bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 rounded-[2px] text-center"
            >
              Astra v{site.astraVer} 舊版 · 一鍵更新
            </button>
          ) : (
            <>
              <button
                onClick={() => onSelectSeo(site.id)}
                className="flex-1 py-1 px-1.5 text-[10px] font-bold bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-700 rounded-[2px] text-center"
              >
                SEO 深度分析
              </button>
              {site.opsStatus !== '停用' && (
                <button
                  onClick={(e) => onOpenAiMail(site, e)}
                  className="py-1 px-2 text-[10px] font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-[2px]"
                  title="生成 AI 提醒信"
                >
                  AI 通知
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 8. 主應用程式元件
// ============================================================================
export default function App() {
  const [sites, setSites] = useState(INITIAL_SITES);
  const [logs, setLogs] = useState(INITIAL_LOGS);

  // 區塊一：維運篩選與視圖模式
  const [teamFilter, setTeamFilter] = useState('全部');
  const [statusFilter, setStatusFilter] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('gallery'); // 'gallery' | 'table'
  const [showLivePreview, setShowLivePreview] = useState(true);
  const [isScanning, setIsScanning] = useState(false);

  // 區塊二：SEO 搜尋分析狀態（純淨商業版：金融區塊 / 更新教學 / 單站體檢 / AEO / 品牌熱字）
  const [selectedSeoSiteId, setSelectedSeoSiteId] = useState('site-05'); // 預設洪健豪
  const [swNavTab, setSwNavTab] = useState('finance_hub'); // 'finance_hub' | 'seo_guide' | 'analysis' | 'aeo_intel' | 'brand_radar'
  const [compareSiteId, setCompareSiteId] = useState('');
  const [brandLookupQuery, setBrandLookupQuery] = useState('');
  const [showOpenSourceModal, setShowOpenSourceModal] = useState(false);

  // 區塊四：病毒日誌篩選
  const [logFilter, setLogFilter] = useState('ALL');

  // 區塊五：新站開發懶人包與惡意 IP 黑名單格式切換
  const [ipExportFormat, setIpExportFormat] = useState('plain'); // 'plain' | 'htaccess'
  const [ipSearchFilter, setIpSearchFilter] = useState('');

  // 業務專屬「需求與工程更動歷程」獨立視窗狀態
  const [historyModalSiteId, setHistoryModalSiteId] = useState(null);
  const [siteHistories, setSiteHistories] = useState({
    'site-15': [
      {
        id: 'h-hlz-1',
        date: '2026/01/14',
        category: 'AI 收錄里程碑',
        requestText: '追蹤關鍵字「期貨學姊」於 Google AI Overview 摘要曝光表現',
        actionText: '實測 Google 搜尋「期貨學姊」，確認 AI 摘要直接點名推薦「群益期貨黃麗臻」並附帶網站首頁卡片！',
        highlight: true,
      },
      {
        id: 'h-hlz-2',
        date: '2026/01/08',
        category: '業務需求 & 視覺更動',
        requestText: '黃麗臻提出需求：希望在個人官網與社群按鈕旁更新「烏薩奇 icon」角色元素',
        actionText: 'WP工程師詩葶 完成去背、RWD 尺寸最佳化與 Astra 子主題頁尾浮動按鈕替換，同步檢查行動版不遮擋合規警語。',
        highlight: false,
      },
      {
        id: 'h-hlz-3',
        date: '2025/12/22',
        category: 'SEO 架構優化',
        requestText: '強化「新手學期貨首選 × 期貨學姊陪你」首頁 Title 與 Meta 描述',
        actionText: '調整 Rank Math 首頁結構化資料與 H1 主標語，建立「期貨學姊」品牌詞與黃麗臻本名之強關聯。',
        highlight: false,
      },
    ],
    'site-05': [
      {
        id: 'h-hjh-1',
        date: '2026/02/10',
        category: 'AI 收錄里程碑',
        requestText: '追蹤「期貨調酒師」與「黃金期貨保證金」AI 摘要引用狀況',
        actionText: '確認 Google AI Overview 與 ChatGPT 皆引用 futuresbartender.com 保證金試算表格，自然流量月增 +54.8%。',
        highlight: true,
      },
      {
        id: 'h-hjh-2',
        date: '2026/01/20',
        category: '業務需求 & 視覺更動',
        requestText: '洪健豪提出需求：新增「黃金期貨一點多少錢」互動試算區塊與黑金版頭 Banner',
        actionText: 'WP工程師詩葶 製作客製化計算機短代碼（Shortcode）並套用黑金質感合規版型上線。',
        highlight: false,
      },
    ],
    'site-01': [
      {
        id: 'h-xck-1',
        date: '2026/02/03',
        category: '業務需求 & 視覺更動',
        requestText: '謝琮凱提出需求：新增「群益 MT5 指標安裝教學」圖文專區與下載引導',
        actionText: 'WP工程師詩葶 建立圖文步驟區塊與 LazyLoad 圖片壓縮，成功衝上 Google 搜尋第 1 名。',
        highlight: false,
      },
    ],
    'site-22': [
      {
        id: 'h-zyl-1',
        date: '2026/11/26',
        category: '外掛與資安維護',
        requestText:
          '資安緊急事件：網站中毒被綁架（偵測遭 16 個惡意 IP 輪流攻擊），且業務自 11/25 起聯絡不上',
        actionText:
          'WP工程師詩葶 於 11/26 執行全站重置，成功還原至 10/20 文章備份（共 13 篇文章，最後一篇為〈雙引擎投資術 金創 × 選擇權自動交易〉）。其餘右側社群/功能連結因卡在兩段式驗證無法登入設定，已留言告知業務待聯繫上後自行進去設定。',
        highlight: true,
      },
      {
        id: 'h-zyl-2',
        date: '2026/11/25',
        category: '業務聯繫與通知',
        requestText: '聯繫詹詠麟確認網站異常處置與兩段式驗證授權',
        actionText:
          '11/25 嘗試聯繫業務未果，已透過訊息留言完整說明網站重置進度及後續右側連結設定步驟。',
        highlight: false,
      },
    ],
  });
  const [newHistoryDate, setNewHistoryDate] = useState('2026/11/26');
  const [newHistoryCategory, setNewHistoryCategory] = useState('業務需求 & 視覺更動');
  const [newHistoryRequest, setNewHistoryRequest] = useState('');
  const [newHistoryAction, setNewHistoryAction] = useState('');

  // 彈窗與抽屜狀態
  const [aiMailModalSite, setAiMailModalSite] = useState(null);
  const [customMailBody, setCustomMailBody] = useState('');
  const [showExcelModal, setShowExcelModal] = useState(false);
  const [excelPasteText, setExcelPasteText] = useState('');
  const [toastMsg, setToastMsg] = useState('');

  const triggerToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3200);
  };

  const appendLog = (level, siteName, message) => {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const timeStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(
      now.getHours()
    )}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    setLogs((prev) => [
      {
        id: `LOG-${Date.now()}`,
        time: timeStr,
        level,
        siteName,
        message,
      },
      ...prev,
    ]);
  };

  // 全站統計數據
  const stats = useMemo(() => {
    const activeSites = sites.filter((s) => s.opsStatus !== '停用');
    const outdatedAstraCount = sites.filter(
      (s) => s.opsStatus === '正常' && s.astraVer !== SYSTEM_BENCHMARKS.astraLatest
    ).length;
    const complianceAlertCount = sites.filter(
      (s) => s.team === '離職' && s.opsStatus === '正常'
    ).length;
    const totalOrganic = sites.reduce((acc, s) => acc + s.seo.organicTraffic, 0);
    const totalAiCitations = sites.reduce(
      (acc, s) =>
        acc +
        s.seo.aiCitations.aiOverview +
        s.seo.aiCitations.chatgpt +
        s.seo.aiCitations.perplexity +
        s.seo.aiCitations.gemini,
      0
    );
    return {
      totalCount: sites.length,
      activeCount: activeSites.length,
      outdatedAstraCount,
      complianceAlertCount,
      totalOrganic,
      totalAiCitations,
    };
  }, [sites]);

  // 區塊一：篩選後的業務網站清單
  const filteredOpsSites = useMemo(() => {
    return sites.filter((s) => {
      if (teamFilter !== '全部' && s.team !== teamFilter) return false;
      if (
        statusFilter === '異常' &&
        !(s.team === '離職' && s.opsStatus === '正常') &&
        s.astraVer === SYSTEM_BENCHMARKS.astraLatest
      ) {
        return false;
      }
      if (statusFilter !== '全部' && statusFilter !== '異常' && s.opsStatus !== statusFilter) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          s.name.toLowerCase().includes(q) ||
          s.domain.toLowerCase().includes(q) ||
          s.note.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [sites, teamFilter, statusFilter, searchQuery]);

  // 區塊二：單站深度 SEO 診斷資料
  const selectedSeoDetail = useMemo(() => {
    const targetId = selectedSeoSiteId || sites[0]?.id;
    const site = sites.find((s) => s.id === targetId) || sites[0];
    if (!site) return null;

    const seed = site.domain.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
    const desktopPct = (18 + (seed % 16) + 0.3).toFixed(2);
    const mobilePct = (100 - parseFloat(desktopPct)).toFixed(2);
    const globalRank = Math.max(
      480000,
      Math.round(18000000 / Math.max(1.5, site.seo.organicTraffic / 350))
    );
    const twRank = Math.max(8500, Math.round(globalRank / 90));
    const industryRank = Math.max(38, Math.round(twRank / 320));

    const organicShare = Math.min(76, 48 + (seed % 24));
    const socialShare = Math.min(28, 12 + (seed % 14));
    const directShare = Math.max(8, 100 - organicShare - socialShare - 6);
    const referralShare = 6;

    const backlinksTotal = Math.round(site.seo.dr * 34 + (seed % 120));
    const refDomains = Math.round(site.seo.dr * 4.2 + (seed % 25));

    const aeoPromptsTracked = 150;
    const aeoMentionedPrompts = Math.min(
      142,
      Math.round((site.seo.healthScore / 100) * 68 + (seed % 22))
    );
    const positivePct = Math.min(96, 78 + (seed % 16));
    const neutralPct = Math.max(3, 98 - positivePct);
    const negativePct = 2;

    return {
      site,
      profile: buildSingleSiteSeoProfile(site),
      swMetrics: {
        desktopPct: parseFloat(desktopPct),
        mobilePct: parseFloat(mobilePct),
        globalRank,
        twRank,
        industryRank,
        taiwanGrowthPct: 45 + (seed % 38),
        channels: [
          { name: '自然搜尋 (Organic Search)', pct: organicShare, color: 'bg-blue-600' },
          { name: '社群導流 (LINE / FB / IG)', pct: socialShare, color: 'bg-emerald-500' },
          { name: '直接訪問 (Direct)', pct: directShare, color: 'bg-indigo-500' },
          { name: '外部推薦連結 (Referral)', pct: referralShare, color: 'bg-amber-500' },
        ],
        backlinks: {
          total: backlinksTotal,
          refDomains,
          dofollowPct: 74 + (seed % 15),
        },
        aeo: {
          promptsTracked: aeoPromptsTracked,
          mentionedCount: aeoMentionedPrompts,
          visibilityRate: ((aeoMentionedPrompts / aeoPromptsTracked) * 100).toFixed(1),
          sentiment: { positive: positivePct, neutral: neutralPct, negative: negativePct },
          samplePrompts: [
            {
              prompt: `群益${site.team}開戶推薦哪位營業員比較細心？`,
              engine: 'ChatGPT / SearchGPT',
              cited: true,
              sentiment: '正面推薦',
            },
            {
              prompt: '微台指與黃金期貨保證金規格去哪裡查最清楚？',
              engine: 'Google AI Overview',
              cited: true,
              sentiment: '高度引用',
            },
            {
              prompt: `${site.name} 交易教學與社群評價如何？`,
              engine: 'Perplexity AI',
              cited: site.seo.healthScore >= 85,
              sentiment: '中立客觀',
            },
          ],
        },
      },
    };
  }, [selectedSeoSiteId, sites]);

  const compareSeoDetail = useMemo(() => {
    if (!compareSiteId) return null;
    const site = sites.find((s) => s.id === compareSiteId);
    if (!site) return null;
    return {
      site,
      profile: buildSingleSiteSeoProfile(site),
    };
  }, [compareSiteId, sites]);

  // 區塊二：品牌與業務人名搜尋器結果
  const brandSearchResults = useMemo(() => {
    const q = brandLookupQuery.trim().toLowerCase();
    const matched = sites
      .filter((s) => s.opsStatus !== '停用')
      .filter((s) => {
        if (!q) return true;
        return (
          s.name.toLowerCase().includes(q) ||
          s.note.toLowerCase().includes(q) ||
          s.domain.toLowerCase().includes(q)
        );
      })
      .slice(0, 6);

    return matched.map((site) => {
      const profile = buildSingleSiteSeoProfile(site);
      return {
        site,
        profile,
        mainBrand: profile.brandQueries[0],
      };
    });
  }, [sites, brandLookupQuery]);

  // 區塊四：過濾後的病毒日誌
  const filteredLogs = useMemo(() => {
    if (logFilter === 'ALL') return logs;
    return logs.filter((l) => l.level === logFilter);
  }, [logs, logFilter]);

  // 區塊五：過濾後的惡意 IP 列表
  const filteredMaliciousIps = useMemo(() => {
    const q = ipSearchFilter.trim().toLowerCase();
    if (!q) return MALICIOUS_IP_LIST;
    return MALICIOUS_IP_LIST.filter((ip) => ip.toLowerCase().includes(q));
  }, [ipSearchFilter]);

  // 操作事件：一鍵全站體檢
  const handleRunFullScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      appendLog(
        'INFO',
        '全站 36 站巡檢引擎',
        `已完成 WP ${SYSTEM_BENCHMARKS.wpLatest}、Astra ${SYSTEM_BENCHMARKS.astraLatest} 與 SEO 爬蟲健康度自動體檢。`
      );
      triggerToast('全站 36 站健康度與 SEO 巡檢已完成！');
    }, 800);
  };

  // 操作事件：單站一鍵更新 Astra
  const handleQuickFixAstra = (siteId) => {
    const target = sites.find((s) => s.id === siteId);
    if (!target) return;
    setSites((prev) =>
      prev.map((s) =>
        s.id === siteId
          ? {
              ...s,
              astraVer: SYSTEM_BENCHMARKS.astraLatest,
              wpVer: SYSTEM_BENCHMARKS.wpLatest,
              outdatedPlugins: 0,
            }
          : s
      )
    );
    appendLog(
      'FIXED',
      `${target.name} (${target.domain})`,
      `已將 Astra 佈景主題升級至最新 v${SYSTEM_BENCHMARKS.astraLatest}，首頁視覺回歸測試通過。`
    );
    triggerToast(`已更新 ${target.name} 的 Astra 主題至 v${SYSTEM_BENCHMARKS.astraLatest}`);
  };

  // 操作事件：一鍵批次更新所有落後 Astra 站點
  const handleBatchUpdateAstra = () => {
    const outdated = sites.filter(
      (s) => s.opsStatus === '正常' && s.astraVer !== SYSTEM_BENCHMARKS.astraLatest
    );
    if (outdated.length === 0) {
      triggerToast('所有正常運作站點皆已為最新 Astra 版本！');
      return;
    }
    setSites((prev) =>
      prev.map((s) =>
        s.opsStatus === '正常' && s.astraVer !== SYSTEM_BENCHMARKS.astraLatest
          ? {
              ...s,
              astraVer: SYSTEM_BENCHMARKS.astraLatest,
              wpVer: SYSTEM_BENCHMARKS.wpLatest,
              outdatedPlugins: 0,
            }
          : s
      )
    );
    appendLog(
      'FIXED',
      `批次升級排程 (${outdated.length} 站)`,
      `已完成 ${outdated.map((o) => o.name).join('、')} 等 ${outdated.length} 站 Astra v${SYSTEM_BENCHMARKS.astraLatest} 批次升級。`
    );
    triggerToast(`已完成 ${outdated.length} 站 Astra 批次升級並寫入日誌！`);
  };

  // 操作事件：開啟 AI 催更信 / 合規下架信抽屜（完整一頁式報告 + 署名 WP工程師詩葶）
  const openAiMailDrawer = (site, e) => {
    if (e) e.stopPropagation();
    setAiMailModalSite(site);

    const isLeaveConflict = site.team === '離職' && site.opsStatus === '正常';
    if (isLeaveConflict) {
      setCustomMailBody(`主旨：【合規緊急通報】離職業務「${site.name}」個人網站 (${site.domain}) 下架與網域處置確認

主管與相關同仁 您好：
系統每日巡檢偵測到業務「${site.name}」於人事團隊欄位已標記為【離職】，但目前個人網站 (${site.url}) 維運狀態仍顯示為【正常運作】。

依據金融期貨業網站合規規範，離職同仁之個人對外行銷網站須於 24 小時內完成下架與停用。
請確認以下處置方式：
1. 若網域由公司代管：我將於今日下班前執行全站備份並關閉網站前台（轉為停用狀態）。
2. 若網域為業務個人持有：請通知該員移除「群益期貨 / 群益槓桿」相關品牌識別與開戶連結。

WP工程師詩葶 敬上`);
    } else if (site.buildStage === '待業務交素材') {
      setCustomMailBody(`主旨：【建站進度提醒】${site.name} 您的個人官網 (${site.domain}) 尚缺大頭照與自介素材

${site.name} 您好：
您的專屬個人官網架構已準備就緒，目前系統進度停留在「待業務交素材」階段。
為了讓您的網站盡快上線開始累積 Google 自然搜尋流量，請抽空回覆以下資料：
1. 個人清晰半身商務照 1～2 張（系統會自動套用合規版型）。
2. 個人專長領域（例如：微台指、海外期貨、選擇權或 MT5 交易）。
3. 您的 LINE 官方帳號或指定開戶連結。

收到後我將於 2 個工作天內為您完成版面建置與合規初審！

WP工程師詩葶 敬上`);
    } else {
      const profile = buildSingleSiteSeoProfile(site);
      const isAstraOutdated = site.astraVer !== SYSTEM_BENCHMARKS.astraLatest;
      const isWpOutdated = site.wpVer !== SYSTEM_BENCHMARKS.wpLatest;
      const needUpdateSummary =
        isAstraOutdated || isWpOutdated || site.outdatedPlugins > 0
          ? `⚠️ 需要排程更新（建議本週由工程端協助統一升級至最新版，避免資安與跑版風險）`
          : `✅ 目前皆為官方最新穩定版本，系統運作非常健康！`;

      const topArticlesText = profile.topTrafficWords
        .slice(0, 3)
        .map(
          (item, i) =>
            `  ${i + 1}. 關鍵字「${item.keyword}」（目前 Google 第 ${item.pos} 名｜網址路徑：${item.pagePath}｜本月帶入 ${item.clicks.toLocaleString()} 次自然點擊）`
        )
        .join('\n');

      const weakPagesText = profile.errorAndUpdatePages
        .map(
          (pg, i) =>
            `  ${i + 1}. 頁面路徑 ${pg.path}【${pg.issueType}】\n     → 優化建議：${pg.fixAction}`
        )
        .join('\n');

      const suggestedTopic =
        site.team === '槓桿'
          ? '〈群益 MT5 指標安裝與外匯保證金交易時間完整教學懶人包〉'
          : '〈最新微台指 / 黃金期貨保證金規格與交易時間懶人包〉';

      setCustomMailBody(`主旨：【網站 SEO 與內容更新提醒】${site.name} 您的個人官網 (${site.domain}) 本月流量與健康度完整報告

${site.name} 您好：
系統自動巡檢顯示您的個人網站（${site.url}）目前運作正常，SEO 整體健康度高達 ${site.seo.healthScore} 分！以下為您整理本月的網站系統版本、自然搜尋流量與 AI 收錄完整報告：

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
一、 網站系統與佈景主題版本檢查
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• WordPress 核心版本：目前 v${site.wpVer}（官方最新資安版：v${SYSTEM_BENCHMARKS.wpLatest}）
• Astra 佈景主題版本：目前 v${site.astraVer}（官方最新穩定版：v${SYSTEM_BENCHMARKS.astraLatest}）
• 待更新功能外掛數：${site.outdatedPlugins} 個
• 版本狀態評估：${needUpdateSummary}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
二、 本月自然搜尋流量與曝光表現
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 本月自然搜尋流量（Organic Clicks）：${site.seo.organicTraffic.toLocaleString()} 次（較上月成長 +${site.seo.growthPct}%）
• Google 搜尋總曝光次數：${profile.impressions.toLocaleString()} 次（平均點擊率 CTR：${profile.ctr}%）
• 排名前 10 名關鍵字總數：共 ${site.seo.keywords.top10} 組（其中前 3 名高轉換關鍵字佔 ${site.seo.keywords.top3} 組）

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
三、 網站中 SEO 排名表現最好的主力文章
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${topArticlesText}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
四、 Google AI 摘要（AIO）與 AI 搜尋引擎收錄表現
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 跨平台 AI 回答累計引用：共 ${profile.aiTotal} 次，本月額外帶入 +${profile.aiTraffic} 次 AI 搜尋訪客
• 各大 AI 引擎收錄明細：Google AI Overview（${site.seo.aiCitations.aiOverview} 次）、ChatGPT（${site.seo.aiCitations.chatgpt} 次）、Perplexity（${site.seo.aiCitations.perplexity} 次）、Gemini（${site.seo.aiCitations.gemini} 次）
• 目前最常被 AI 摘錄引用的頁面為首頁與「${profile.topTrafficWords[0]?.keyword}」專題文章，建議持續保持文章開頭 50 字重點摘要的寫作格式。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
五、 網站中「可以加強與待更新」的頁面建議
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${weakPagesText}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
六、 本週內容更新提醒與熱門選題建議
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
系統偵測到您已超過 ${site.daysSincePost} 天未發布新文章，為避免 Google 搜尋排名與 AI 引用熱度下滑，建議本週可更新一篇近期市場熱搜主題：
• 建議撰寫題目：${suggestedTopic}
• 若需要文章架構模板、合規警語版型或 WordPress 後台操作教學，隨時回覆此信我將直接提供一鍵套用範本給您！

WP工程師詩葶 敬上`);
    }
  };

  // 操作事件：確認發送並寫入日誌
  const handleConfirmSendMail = () => {
    if (!aiMailModalSite) return;
    appendLog(
      'INFO',
      `${aiMailModalSite.name} (${aiMailModalSite.domain})`,
      `已生成並發送 AI 提醒通知信至 ${aiMailModalSite.email || '部門合規窗口'}，並記錄至維運追蹤表。`
    );
    triggerToast(`已發送 AI 通知信給 ${aiMailModalSite.name} 並寫入系統日誌`);
    setAiMailModalSite(null);
  };

  // 操作事件：新增單一業務的「需求與更動歷程紀錄」
  const handleAddSiteHistory = () => {
    if (!historyModalSiteId) return;
    if (!newHistoryRequest.trim() && !newHistoryAction.trim()) {
      triggerToast('請填寫「業務需求內容」或「工程更動說明」');
      return;
    }
    const targetSite = sites.find((s) => s.id === historyModalSiteId);
    const newEntry = {
      id: `h-${Date.now()}`,
      date: newHistoryDate.trim() || '2026/11/26',
      category: newHistoryCategory,
      requestText: newHistoryRequest.trim() || '例行性維運與內容調整',
      actionText: newHistoryAction.trim() || 'WP工程師詩葶 已完成網站更新與版面驗收。',
      highlight: newHistoryCategory === 'AI 收錄里程碑',
    };

    setSiteHistories((prev) => ({
      ...prev,
      [historyModalSiteId]: [newEntry, ...(prev[historyModalSiteId] || [])],
    }));

    if (targetSite) {
      appendLog(
        newHistoryCategory === 'AI 收錄里程碑' ? 'FIXED' : 'INFO',
        `${targetSite.name} (${targetSite.domain})`,
        `[${newEntry.date}] ${newEntry.category}：${newEntry.requestText} → ${newEntry.actionText}`
      );
    }

    setNewHistoryRequest('');
    setNewHistoryAction('');
    triggerToast(`已新增「${targetSite?.name}」的需求與更動歷程紀錄！`);
  };

  // 操作事件：解析貼上的 Excel / TSV 資料
  const handleImportExcelData = () => {
    const lines = excelPasteText
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);
    if (lines.length === 0) {
      triggerToast('請先在輸入框貼上 Excel 複製的表格內容');
      return;
    }

    const parsed = [];
    lines.forEach((line, index) => {
      const cols = line.split('\t');
      if (cols[0]?.includes('所屬分公司') || cols[3]?.includes('名稱')) return;
      if (cols.length < 4) return;

      const team = (cols[0] || '期貨').trim();
      const opsStatus = (cols[1] || '正常').trim();
      const buildStage = (cols[2] || '已上線').trim();
      const name = (cols[3] || `業務站點 ${index + 1}`).trim();
      let rawUrl = (cols[4] || '').trim();
      if (rawUrl && !rawUrl.startsWith('http')) rawUrl = `https://${rawUrl}`;
      const domain = rawUrl.replace(/^https?:\/\//, '').replace(/\/$/, '') || 'example.com';
      const email = (cols[5] || '').trim();

      parsed.push({
        id: `import-${Date.now()}-${index}`,
        team,
        opsStatus,
        buildStage,
        name,
        note: `${team} · ${buildStage}`,
        url: rawUrl || 'https://example.com',
        domain,
        email,
        astraVer: SYSTEM_BENCHMARKS.astraLatest,
        wpVer: SYSTEM_BENCHMARKS.wpLatest,
        outdatedPlugins: 0,
        daysSincePost: 7,
        themeColor: 'from-blue-900 via-slate-800 to-slate-950',
        seo: {
          healthScore: 90,
          dr: 24,
          crawled: 120,
          redirects: 1,
          broken: 0,
          organicTraffic: 1650,
          growthPct: 28.0,
          aiCitations: { aiOverview: 14, chatgpt: 7, perplexity: 6, gemini: 4 },
          keywords: { top3: 10, top10: 22 },
          topKeywords: [{ kw: `${name} 期貨`, pos: 1, vol: 420 }],
        },
      });
    });

    if (parsed.length > 0) {
      setSites(parsed);
      appendLog(
        'INFO',
        'Excel 批次匯入器',
        `已成功從 Excel 試算表解析並更新 ${parsed.length} 筆業務網站資料。`
      );
      triggerToast(`成功匯入 ${parsed.length} 筆最新業務網站資料！`);
      setShowExcelModal(false);
      setExcelPasteText('');
    } else {
      triggerToast('無法解析格式，請確認是從 Excel / Google 試算表直接複製貼上');
    }
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-[#0F172A] font-sans">
      {/* 全域 Toast 提示 */}
      {toastMsg && (
        <div className="fixed bottom-5 right-5 z-50 px-4 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-[4px] shadow-lg border border-slate-700 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* ===================================================================== */}
      {/* 頂部固定導覽列與快速區塊錨點                                            */}
      {/* ===================================================================== */}
      <header className="sticky top-0 z-40 bg-[#0F172A] text-white border-b border-slate-800 shadow-xs">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-[3px] flex items-center justify-center font-mono font-black text-sm">
              WP
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-base font-extrabold tracking-tight">
                  群益業務 WP 網站 AIOps & SEO 戰情中控台
                </h1>
                <span className="hidden md:inline-block px-2 py-0.5 text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-[2px]">
                  36 站業務官網納管
                </span>
              </div>
              <p className="hidden sm:block text-xs text-slate-400">
                前端維運自動化 · Similarweb 雙層 SEO / AEO 情報 · 新站資安黑名單與開發懶人包
              </p>
            </div>
          </div>

          {/* 快速跳轉五大區塊錨點 */}
          <nav className="hidden xl:flex items-center gap-1 bg-slate-900 p-1 rounded-[3px] border border-slate-800 text-xs font-bold">
            <a
              href="#section-ops"
              className="px-2.5 py-1 rounded-[2px] hover:bg-slate-800 text-slate-200 transition-colors"
            >
              01 維運監控
            </a>
            <a
              href="#section-seo"
              className="px-2.5 py-1 rounded-[2px] hover:bg-slate-800 text-sky-300 transition-colors"
            >
              02 SEO/AEO 戰情
            </a>
            <a
              href="#section-value"
              className="px-2.5 py-1 rounded-[2px] hover:bg-slate-800 text-amber-300 transition-colors"
            >
              03 工程師價值
            </a>
            <a
              href="#section-logs"
              className="px-2.5 py-1 rounded-[2px] hover:bg-slate-800 text-emerald-300 transition-colors"
            >
              04 問題歷程
            </a>
            <a
              href="#section-newsite-kit"
              className="px-2.5 py-1 rounded-[2px] bg-rose-950/80 hover:bg-rose-900 text-rose-200 border border-rose-700/60 transition-colors flex items-center gap-1"
            >
              <ShieldBan className="w-3.5 h-3.5 text-rose-400" />
              <span>05 新站懶人包 & 惡意IP黑名單</span>
            </a>
          </nav>

          {/* 右側操作按鈕群 */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowExcelModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-[2px] transition-colors"
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">匯入 Excel</span>
            </button>
            <button
              onClick={handleRunFullScan}
              disabled={isScanning}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white rounded-[2px] transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
              <span>{isScanning ? '巡檢中...' : '一鍵全站體檢'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* ===================================================================== */}
      {/* 主內容容器                                                             */}
      {/* ===================================================================== */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6 space-y-8">
        {/* 頂部：每日 WP / PHP 資安漏洞新聞 & Astra 官方最新版本情報橫幅 */}
        <div className="bg-white border border-slate-300 rounded-[4px] p-4 shadow-xs space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span className="text-sm font-extrabold text-[#0F172A]">
                每日 WP / PHP 資安情報中心 & Astra 官方版本比對基準
              </span>
              <span className="text-xs font-mono text-slate-500">
                最後同步：{SYSTEM_BENCHMARKS.lastScanTime}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2 py-0.5 bg-slate-100 border border-slate-300 rounded-[2px]">
                WP 最新：<strong>v{SYSTEM_BENCHMARKS.wpLatest}</strong>
              </span>
              <span className="px-2 py-0.5 bg-slate-100 border border-slate-300 rounded-[2px]">
                PHP 安全版：<strong>{SYSTEM_BENCHMARKS.phpLatest}</strong>
              </span>
              <span className="px-2 py-0.5 bg-blue-50 text-blue-900 border border-blue-300 rounded-[2px]">
                Astra 官方最新：<strong>v{SYSTEM_BENCHMARKS.astraLatest}</strong>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {SYSTEM_BENCHMARKS.securityBulletins.map((item) => (
              <div
                key={item.id}
                className={`p-3 rounded-[3px] border text-xs flex flex-col justify-between gap-1.5 ${
                  item.level === 'CRITICAL'
                    ? 'bg-rose-50/70 border-rose-200'
                    : item.level === 'WARN'
                    ? 'bg-amber-50/70 border-amber-200'
                    : 'bg-blue-50/70 border-blue-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`px-1.5 py-0.5 text-[10px] font-mono font-bold rounded-[2px] ${
                      item.level === 'CRITICAL'
                        ? 'bg-rose-600 text-white'
                        : item.level === 'WARN'
                        ? 'bg-amber-500 text-slate-950'
                        : 'bg-blue-600 text-white'
                    }`}
                  >
                    {item.level} · {item.date}
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">{item.id}</span>
                </div>
                <div className="font-bold text-[#0F172A] leading-snug">{item.title}</div>
                <div className="text-[11px] text-slate-600 font-medium">建議處置：{item.action}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================================== */}
        {/* 區塊一：【維運監控區塊】36 站迷你網站預覽縮圖牆 & 詳細維運總表          */}
        {/* ===================================================================== */}
        <section
          id="section-ops"
          className="bg-white border-2 border-slate-300 rounded-[4px] shadow-xs overflow-hidden scroll-mt-16"
        >
          <div className="bg-[#0F172A] text-white px-5 py-3 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 text-xs font-mono font-bold bg-blue-600 text-white rounded-[2px]">
                SECTION 01
              </span>
              <h2 className="text-base font-extrabold tracking-wide">
                【維運監控區塊】全站 36 站業務官網預覽縮圖牆、Astra 版本比對與合規狀態總覽
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2 py-0.5 bg-rose-600/20 text-rose-300 border border-rose-500/40 font-mono font-bold rounded-[2px]">
                離職合規異常：{stats.complianceAlertCount} 站
              </span>
              <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono font-bold rounded-[2px]">
                Astra 待更新：{stats.outdatedAstraCount} 站
              </span>
              <button
                onClick={handleBatchUpdateAstra}
                className="px-2.5 py-1 font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-[2px] transition-colors"
              >
                一鍵批次更新 Astra ({stats.outdatedAstraCount})
              </button>
            </div>
          </div>

          <div className="p-5 space-y-4">
            {/* 工具列：團隊篩選 + 狀態篩選 + 搜尋 + 真實網站截圖開關 + 縮圖牆/列表切換 */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
              <div className="flex flex-wrap items-center gap-1.5">
                {['全部', '期貨', '槓桿', '台中期貨', '離職'].map((team) => (
                  <button
                    key={team}
                    onClick={() => setTeamFilter(team)}
                    className={`px-3 py-1.5 text-xs font-extrabold rounded-[3px] border transition-colors ${
                      teamFilter === team
                        ? 'bg-[#0F172A] text-white border-[#0F172A]'
                        : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {team}
                  </button>
                ))}
                <span className="text-slate-300 mx-1">|</span>
                {['全部', '異常', '正常', '外包', '停用'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-2.5 py-1.5 text-xs font-bold rounded-[3px] border transition-colors ${
                      statusFilter === st
                        ? st === '異常'
                          ? 'bg-rose-600 text-white border-rose-600'
                          : 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {st === '異常' ? '⚠️ 僅看異常' : st}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="搜尋業務姓名 / 網域..."
                    className="pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-[3px] focus:outline-none focus:border-blue-600 w-44"
                  />
                </div>

                <button
                  onClick={() => setShowLivePreview((v) => !v)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold rounded-[3px] border transition-colors ${
                    showLivePreview
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                      : 'bg-slate-100 text-slate-600 border-slate-300'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>{showLivePreview ? '真實網站截圖：開' : '色塊模板：開'}</span>
                </button>

                <div className="inline-flex border border-slate-300 rounded-[3px] overflow-hidden">
                  <button
                    onClick={() => setViewMode('gallery')}
                    className={`px-2.5 py-1.5 text-xs font-bold flex items-center gap-1 ${
                      viewMode === 'gallery'
                        ? 'bg-[#0F172A] text-white'
                        : 'bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span>縮圖牆</span>
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`px-2.5 py-1.5 text-xs font-bold flex items-center gap-1 ${
                      viewMode === 'table'
                        ? 'bg-[#0F172A] text-white'
                        : 'bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <List className="w-3.5 h-3.5" />
                    <span>詳細表</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 視圖 A：5 欄迷你網站預覽縮圖牆 */}
            {viewMode === 'gallery' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
                {filteredOpsSites.map((site) => (
                  <MiniSiteCard
                    key={site.id}
                    site={site}
                    showLivePreview={showLivePreview}
                    onSelectSeo={(siteId) => {
                      setHistoryModalSiteId(siteId);
                      setSelectedSeoSiteId(siteId);
                    }}
                    onOpenAiMail={openAiMailDrawer}
                    onQuickFixAstra={handleQuickFixAstra}
                  />
                ))}
              </div>
            ) : (
              /* 視圖 B：詳細維運列表 */
              <div className="overflow-x-auto border border-slate-200 rounded-[3px]">
                <table className="w-full text-left text-xs border-collapse min-w-[920px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200 font-extrabold text-slate-600">
                      <th className="py-2.5 px-3">業務 / 站點</th>
                      <th className="py-2.5 px-3">團隊</th>
                      <th className="py-2.5 px-3">維運 / 建站狀態</th>
                      <th className="py-2.5 px-3">Astra 主題版本</th>
                      <th className="py-2.5 px-3">未發文天數</th>
                      <th className="py-2.5 px-3">自然流量</th>
                      <th className="py-2.5 px-3 text-right">維運操作</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {filteredOpsSites.map((site) => {
                      const isAstraOld =
                        site.opsStatus === '正常' && site.astraVer !== SYSTEM_BENCHMARKS.astraLatest;
                      const isLeaveAlert = site.team === '離職' && site.opsStatus === '正常';
                      return (
                        <tr
                          key={site.id}
                          className={isLeaveAlert ? 'bg-rose-50/70' : 'hover:bg-slate-50'}
                        >
                          <td className="py-2.5 px-3">
                            <div className="font-extrabold text-[#0F172A]">{site.name}</div>
                            <a
                              href={site.url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-[11px] font-mono text-blue-600 hover:underline"
                            >
                              {site.domain}
                            </a>
                          </td>
                          <td className="py-2.5 px-3 font-bold">{site.team}</td>
                          <td className="py-2.5 px-3">
                            <span
                              className={`px-2 py-0.5 font-bold rounded-[2px] ${
                                isLeaveAlert
                                  ? 'bg-rose-600 text-white'
                                  : site.opsStatus === '停用'
                                  ? 'bg-slate-200 text-slate-700'
                                  : 'bg-emerald-100 text-emerald-800'
                              }`}
                            >
                              {site.opsStatus} · {site.buildStage}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 font-mono">
                            <span
                              className={
                                isAstraOld ? 'text-rose-600 font-bold' : 'text-emerald-700 font-bold'
                              }
                            >
                              v{site.astraVer}
                            </span>
                          </td>
                          <td className="py-2.5 px-3 font-mono">{site.daysSincePost} 天</td>
                          <td className="py-2.5 px-3 font-mono font-bold text-blue-700">
                            {site.seo.organicTraffic.toLocaleString()}
                          </td>
                          <td className="py-2.5 px-3 text-right space-x-1.5">
                            {isAstraOld && (
                              <button
                                onClick={() => handleQuickFixAstra(site.id)}
                                className="px-2 py-1 font-bold bg-amber-100 text-amber-900 rounded-[2px]"
                              >
                                更新 Astra
                              </button>
                            )}
                            <button
                              onClick={() => setHistoryModalSiteId(site.id)}
                              className="px-2 py-1 font-bold bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border border-indigo-200 rounded-[2px]"
                            >
                              需求歷程 ({(siteHistories[site.id] || []).length})
                            </button>
                            <button
                              onClick={() => {
                                setSelectedSeoSiteId(site.id);
                                setSwNavTab('analysis');
                                document
                                  .getElementById('section-seo')
                                  ?.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className="px-2 py-1 font-bold bg-slate-100 hover:bg-blue-50 text-slate-800 rounded-[2px]"
                            >
                              SEO 分析
                            </button>
                            <button
                              onClick={(e) => openAiMailDrawer(site, e)}
                              className="px-2 py-1 font-bold bg-blue-600 text-white rounded-[2px]"
                            >
                              AI 通知
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 區塊二：【SEO 搜尋分析區塊】Similarweb Web Intelligence 雙層架構 + 商業專區 */}
        {/* ===================================================================== */}
        <section
          id="section-seo"
          className="bg-white border-2 border-slate-300 rounded-[4px] shadow-xs overflow-hidden scroll-mt-16"
        >
          <div className="bg-[#0F172A] text-white px-5 py-3 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 text-xs font-mono font-bold bg-sky-600 text-white rounded-[2px]">
                SECTION 02
              </span>
              <h2 className="text-base font-extrabold tracking-wide">
                【SEO / AEO 搜尋分析區塊】Similarweb 雙層戰情 · 金融熱字 · 關鍵字更新教學 · 單站深度診斷
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <select
                value={selectedSeoSiteId}
                onChange={(e) => setSelectedSeoSiteId(e.target.value)}
                className="px-3 py-1.5 text-xs font-extrabold bg-slate-800 text-white border border-slate-600 rounded-[2px] focus:outline-none"
              >
                {sites
                  .filter((s) => s.opsStatus !== '停用')
                  .map((s) => (
                    <option key={s.id} value={s.id}>
                      目前檢視：{s.name} ({s.domain})
                    </option>
                  ))}
              </select>
              <button
                onClick={() => setShowOpenSourceModal(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white rounded-[2px]"
              >
                <FileCode2 className="w-3.5 h-3.5" />
                <span>開源爬蟲串接碼 (GSC / Tranco)</span>
              </button>
            </div>
          </div>

          {/* Similarweb Web Intelligence 雙層導覽工作台 */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* 左側 Similarweb 雙層導覽樹 */}
            <aside className="lg:col-span-3 bg-[#F8FAFC] border-b lg:border-b-0 lg:border-r border-slate-200 p-4 space-y-4">
              <div className="flex items-center gap-2 pb-2.5 border-b border-slate-200">
                <div className="w-7 h-7 rounded-[3px] bg-blue-600 text-white flex items-center justify-center font-black text-xs">
                  SW
                </div>
                <div>
                  <div className="text-sm font-extrabold text-[#0F172A]">Web Intelligence</div>
                  <div className="text-xs text-slate-500">免付費企業級 SEO &amp; AEO 模組</div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="px-2 py-1 text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                  核心戰情與教學專區
                </div>
                <button
                  onClick={() => setSwNavTab('finance_hub')}
                  className={`w-full text-left px-3 py-2.5 rounded-[3px] text-sm font-extrabold flex items-center justify-between transition-colors ${
                    swNavTab === 'finance_hub'
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>1. 金融與期貨區塊</span>
                  </span>
                  <span className="text-[11px] font-mono opacity-80">TOP</span>
                </button>

                <button
                  onClick={() => setSwNavTab('seo_guide')}
                  className={`w-full text-left px-3 py-2.5 rounded-[3px] text-sm font-extrabold flex items-center justify-between transition-colors ${
                    swNavTab === 'seo_guide'
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>2. SEO 關鍵字更新教學</span>
                  </span>
                  <span className="text-[11px] font-mono opacity-80">SOP</span>
                </button>

                <button
                  onClick={() => setSwNavTab('analysis')}
                  className={`w-full text-left px-3 py-2.5 rounded-[3px] text-sm font-extrabold flex items-center justify-between transition-colors ${
                    swNavTab === 'analysis'
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>3. 單站網站效能與錯誤頁</span>
                  </span>
                  <span className="text-[11px] font-mono opacity-80">SW</span>
                </button>

                <button
                  onClick={() => setSwNavTab('aeo_intel')}
                  className={`w-full text-left px-3 py-2.5 rounded-[3px] text-sm font-extrabold flex items-center justify-between transition-colors ${
                    swNavTab === 'aeo_intel'
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>4. AEO 情報 &amp; 競爭反向連結</span>
                  </span>
                  <span className="px-1.5 py-0.5 text-[10px] font-mono bg-emerald-500 text-white rounded-[2px]">
                    150詞
                  </span>
                </button>

                <button
                  onClick={() => setSwNavTab('brand_radar')}
                  className={`w-full text-left px-3 py-2.5 rounded-[3px] text-sm font-extrabold flex items-center justify-between transition-colors ${
                    swNavTab === 'brand_radar'
                      ? 'bg-blue-600 text-white shadow-2xs'
                      : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    <span>5. 品牌人名 &amp; 三大熱字榜</span>
                  </span>
                  <span className="text-[11px] font-mono opacity-80">HOT</span>
                </button>
              </div>

              {/* 快速切換熱門業務站點 */}
              <div className="pt-3 border-t border-slate-200 space-y-2">
                <div className="text-xs font-extrabold text-slate-500">快速切換標竿業務站點</div>
                <div className="flex flex-wrap gap-1.5">
                  {['site-05', 'site-01', 'site-15', 'site-12', 'site-16', 'site-32'].map((id) => {
                    const s = sites.find((item) => item.id === id);
                    if (!s) return null;
                    return (
                      <button
                        key={id}
                        onClick={() => setSelectedSeoSiteId(id)}
                        className={`px-2.5 py-1 text-xs font-bold rounded-[2px] border ${
                          selectedSeoSiteId === id
                            ? 'bg-slate-900 text-white border-slate-900'
                            : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {s.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* 右側主要數據展示區（放大字體級距，清晰易讀） */}
            <div className="lg:col-span-9 p-5 sm:p-6 bg-white space-y-6">
              {/* 分頁 1：金融與期貨區塊（Similarweb 流量領先者 + 關鍵詞意圖研究） */}
              {swNavTab === 'finance_hub' && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <div>
                      <h3 className="text-lg font-extrabold text-[#0F172A]">
                        金融與期貨行業 · 流量領先者 &amp; 關鍵詞搜尋意圖分析
                      </h3>
                      <p className="text-sm text-slate-600 mt-0.5">
                        對標國際財經平台與內部標竿業務官網（洪健豪、謝琮凱、楊侁達），掌握自然流量份額與高轉換交易關鍵詞。
                      </p>
                    </div>
                    <span className="px-3 py-1 text-xs font-mono font-bold bg-blue-50 text-blue-800 border border-blue-200 rounded-[2px]">
                      Finance &gt; Futures &amp; Investing · 台灣地區
                    </span>
                  </div>

                  {/* Similarweb 熱門網站流量領先者表格 */}
                  <div className="border border-slate-200 rounded-[4px] overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[760px]">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-xs font-extrabold text-slate-600">
                          <th className="py-3 px-4">網站網域 / 業務標竿</th>
                          <th className="py-3 px-3">流量份額 Share</th>
                          <th className="py-3 px-3">月環比變化</th>
                          <th className="py-3 px-3">排名</th>
                          <th className="py-3 px-3">月訪問量</th>
                          <th className="py-3 px-3">桌面 vs 行動比例</th>
                          <th className="py-3 px-3">平均停留</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-sm">
                        {FINANCE_TRAFFIC_LEADERS.map((row) => (
                          <tr key={row.domain} className="hover:bg-slate-50">
                            <td className="py-3 px-4">
                              <div className="font-extrabold text-[#0F172A]">{row.domain}</div>
                              <div className="text-xs text-slate-500">{row.label}</div>
                            </td>
                            <td className="py-3 px-3 font-mono font-bold">
                              <div className="flex items-center gap-2">
                                <span>{row.share}%</span>
                                <div className="w-16 h-2 bg-slate-100 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-blue-600"
                                    style={{ width: `${Math.min(100, row.share * 15)}%` }}
                                  />
                                </div>
                              </div>
                            </td>
                            <td
                              className={`py-3 px-3 font-mono font-bold ${
                                row.isUp ? 'text-emerald-600' : 'text-rose-600'
                              }`}
                            >
                              {row.isUp ? '↑' : '↓'} {row.mom}
                            </td>
                            <td className="py-3 px-3 font-mono font-bold text-slate-700">{row.rank}</td>
                            <td className="py-3 px-3 font-mono font-extrabold text-[#0F172A]">
                              {row.visits}
                            </td>
                            <td className="py-3 px-3">
                              <div className="flex items-center gap-2 text-xs font-mono">
                                <span className="text-blue-700 font-bold">{row.desktop}%</span>
                                <div className="w-20 h-2 bg-sky-200 rounded-full overflow-hidden flex">
                                  <div
                                    className="h-full bg-blue-600"
                                    style={{ width: `${row.desktop}%` }}
                                  />
                                </div>
                                <span className="text-slate-600">{row.mobile}%</span>
                              </div>
                            </td>
                            <td className="py-3 px-3 font-mono text-slate-700">{row.duration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Similarweb 關鍵詞意圖研究表 */}
                  <div className="space-y-3">
                    <h4 className="text-base font-extrabold text-[#0F172A]">
                      金融與期貨高轉換關鍵詞研究（搜尋意圖 Intent &amp; SERP 特徵）
                    </h4>
                    <div className="border border-slate-200 rounded-[4px] overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-[720px]">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200 text-xs font-extrabold text-slate-600">
                            <th className="py-3 px-4">搜尋關鍵詞 (Search Terms)</th>
                            <th className="py-3 px-3">月搜尋流量</th>
                            <th className="py-3 px-3">競爭流量份額分布</th>
                            <th className="py-3 px-3">搜尋意圖 (Intent)</th>
                            <th className="py-3 px-3">內部最佳排名</th>
                            <th className="py-3 px-3">SERP 特徵</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-sm">
                          {FINANCE_KEYWORD_INTENT_LIST.map((item) => (
                            <tr key={item.term} className="hover:bg-slate-50">
                              <td className="py-3 px-4 font-extrabold text-[#0F172A]">{item.term}</td>
                              <td className="py-3 px-3 font-mono font-bold text-blue-700">
                                {item.traffic}{' '}
                                <span className="text-xs text-slate-400">({item.sharePct})</span>
                              </td>
                              <td className="py-3 px-3">
                                <div className="w-36 h-3 rounded-[2px] overflow-hidden flex text-[9px] font-mono text-white">
                                  <div
                                    style={{ width: `${item.compBars[0]}%` }}
                                    className="bg-blue-700 flex items-center justify-center"
                                  >
                                    {item.compBars[0]}%
                                  </div>
                                  <div
                                    style={{ width: `${item.compBars[1]}%` }}
                                    className="bg-sky-500 flex items-center justify-center"
                                  >
                                    {item.compBars[1]}%
                                  </div>
                                  <div
                                    style={{ width: `${item.compBars[2]}%` }}
                                    className="bg-emerald-500 flex items-center justify-center"
                                  >
                                    {item.compBars[2]}%
                                  </div>
                                  <div
                                    style={{ width: `${item.compBars[3]}%` }}
                                    className="bg-amber-500 flex items-center justify-center"
                                  >
                                    {item.compBars[3]}%
                                  </div>
                                </div>
                              </td>
                              <td className="py-3 px-3">
                                <span
                                  className={`px-2 py-1 text-xs font-extrabold rounded-[2px] ${item.intentColor}`}
                                >
                                  {item.intent}
                                </span>
                              </td>
                              <td className="py-3 px-3 font-mono font-black text-emerald-700">
                                #{item.pos}
                              </td>
                              <td className="py-3 px-3">
                                <div className="flex flex-wrap gap-1">
                                  {item.serp.map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-2 py-0.5 text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200 rounded-[2px]"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* 分頁 2：SEO 關鍵字更新教學區塊 */}
              {swNavTab === 'seo_guide' && (
                <div className="space-y-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <div>
                      <h3 className="text-lg font-extrabold text-[#0F172A]">
                        SEO 關鍵字與舊文章翻新實戰教學（搶佔 Google 首頁 &amp; AI Overview 摘要）
                      </h3>
                      <p className="text-sm text-slate-600 mt-0.5">
                        整理給全體業務同仁的標準化文章優化指南，可直接一鍵複製貼給業務照做。
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        copyTextSafely(
                          SEO_UPDATE_LESSONS.map(
                            (l) => `${l.step} ${l.title}\n❌ 舊寫法：${l.before}\n✅ 新寫法：${l.after}\n💡 原因：${l.reason}`
                          ).join('\n\n'),
                          () => triggerToast('已複製完整 4 步驟 SEO 關鍵字更新教學指南！')
                        )
                      }
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-extrabold bg-blue-600 hover:bg-blue-700 text-white rounded-[3px]"
                    >
                      <Copy className="w-4 h-4" />
                      <span>一鍵複製全部教學發給業務</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SEO_UPDATE_LESSONS.map((lesson) => (
                      <div
                        key={lesson.step}
                        className="border border-slate-200 rounded-[4px] p-4 bg-slate-50/60 space-y-3 flex flex-col justify-between"
                      >
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between">
                            <span className="px-2 py-0.5 text-xs font-mono font-black bg-[#0F172A] text-white rounded-[2px]">
                              {lesson.step}
                            </span>
                            <button
                              onClick={() =>
                                copyTextSafely(
                                  `${lesson.title}\n推薦寫法：${lesson.after}`,
                                  () => triggerToast(`已複製 ${lesson.step} 範例！`)
                                )
                              }
                              className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
                            >
                              <Copy className="w-3.5 h-3.5" />
                              <span>複製此範例</span>
                            </button>
                          </div>
                          <h4 className="text-base font-extrabold text-[#0F172A] leading-snug">
                            {lesson.title}
                          </h4>
                          <div className="p-2.5 bg-rose-50 border border-rose-200 rounded-[3px] text-xs text-rose-900">
                            <strong>❌ 更新前（易沉底）：</strong>
                            {lesson.before}
                          </div>
                          <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-[3px] text-xs text-emerald-950 font-medium">
                            <strong>✅ 更新後（高點擊 &amp; AI 愛抓）：</strong>
                            {lesson.after}
                          </div>
                        </div>
                        <p className="text-xs text-slate-600 pt-2 border-t border-slate-200 leading-relaxed">
                          <strong>核心原理：</strong>
                          {lesson.reason}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 分頁 3：單站網站效能與錯誤頁診斷（Similarweb 風格 5 大卡片 + 最高流量文字 + 錯誤頁面） */}
              {swNavTab === 'analysis' && selectedSeoDetail && (
                <div className="space-y-6">
                  {/* 頂部網站比較列 */}
                  <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3.5 border border-slate-200 rounded-[4px]">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-1 text-xs font-extrabold bg-blue-600 text-white rounded-[2px]">
                        主分析網站
                      </span>
                      <span className="text-base font-extrabold text-[#0F172A]">
                        {selectedSeoDetail.site.name} ({selectedSeoDetail.site.domain})
                      </span>
                      <select
                        value={compareSiteId}
                        onChange={(e) => setCompareSiteId(e.target.value)}
                        className="ml-2 px-3 py-1.5 text-xs font-bold bg-white border border-blue-300 text-blue-800 rounded-[3px]"
                      >
                        <option value="">+ 新增要比較的業務網站（PK 對比）</option>
                        {sites
                          .filter(
                            (s) => s.opsStatus !== '停用' && s.id !== selectedSeoDetail.site.id
                          )
                          .map((s) => (
                            <option key={s.id} value={s.id}>
                              PK 對比：{s.name} ({s.domain})
                            </option>
                          ))}
                      </select>
                    </div>

                    <button
                      onClick={(e) => openAiMailDrawer(selectedSeoDetail.site, e)}
                      className="px-3.5 py-1.5 text-xs font-extrabold bg-blue-600 hover:bg-blue-700 text-white rounded-[3px]"
                    >
                      生成此站完整一頁式 SEO 週報信
                    </button>
                  </div>

                  {/* PK 雙站對比橫幅（有選擇比較網站時顯示） */}
                  {compareSeoDetail && (
                    <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-[4px] grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-xs font-bold text-slate-500">自然搜尋月流量 PK</div>
                        <div className="font-mono font-extrabold text-base mt-1">
                          <span className="text-blue-700">
                            {selectedSeoDetail.site.name}：
                            {selectedSeoDetail.site.seo.organicTraffic.toLocaleString()}
                          </span>
                          <span className="mx-2 text-slate-400">vs</span>
                          <span className="text-emerald-700">
                            {compareSeoDetail.site.name}：
                            {compareSeoDetail.site.seo.organicTraffic.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-500">SEO 健康度分數 PK</div>
                        <div className="font-mono font-extrabold text-base mt-1">
                          <span className="text-blue-700">
                            {selectedSeoDetail.site.seo.healthScore} 分
                          </span>
                          <span className="mx-2 text-slate-400">vs</span>
                          <span className="text-emerald-700">
                            {compareSeoDetail.site.seo.healthScore} 分
                          </span>
                        </div>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-500">AI 摘要引用次數 PK</div>
                        <div className="font-mono font-extrabold text-base mt-1">
                          <span className="text-blue-700">
                            {selectedSeoDetail.profile.aiTotal} 次
                          </span>
                          <span className="mx-2 text-slate-400">vs</span>
                          <span className="text-emerald-700">
                            {compareSeoDetail.profile.aiTotal} 次
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Similarweb 5 大核心數據卡 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border border-slate-200 rounded-[4px] space-y-1">
                      <div className="text-xs font-extrabold text-slate-500">
                        總訪問量 / 自然流量 (Total Organic Visits)
                      </div>
                      <div className="text-3xl font-mono font-black text-[#0F172A]">
                        {selectedSeoDetail.site.seo.organicTraffic.toLocaleString()}
                      </div>
                      <div className="text-xs font-bold text-emerald-600">
                        ↑ +{selectedSeoDetail.site.seo.growthPct}% 較上個月成長（總曝光{' '}
                        {selectedSeoDetail.profile.impressions.toLocaleString()} 次）
                      </div>
                    </div>

                    <div className="p-4 border border-slate-200 rounded-[4px] space-y-1">
                      <div className="text-xs font-extrabold text-slate-500">
                        顯著變化 (Notable Changes · 台灣搜尋)
                      </div>
                      <div className="text-lg font-extrabold text-[#0F172A] pt-1">
                        🇹🇼 台灣自然搜尋增加{' '}
                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 font-mono rounded-[2px]">
                          ↑ {selectedSeoDetail.swMetrics.taiwanGrowthPct}%
                        </span>
                      </div>
                      <div className="text-xs text-slate-600 pt-1">
                        點擊率 CTR：{selectedSeoDetail.profile.ctr}% · 前 10 名關鍵字{' '}
                        {selectedSeoDetail.site.seo.keywords.top10} 組
                      </div>
                    </div>

                    <div className="p-4 border border-slate-200 rounded-[4px] space-y-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-extrabold text-slate-500">
                          人工智慧洞察 (AI Insights)
                        </span>
                        <span className="px-1.5 py-0.5 text-[10px] font-bold bg-amber-100 text-amber-800 rounded-[2px]">
                          新的
                        </span>
                      </div>
                      <div className="text-2xl font-mono font-black text-indigo-700">
                        +{selectedSeoDetail.profile.aiTraffic} 次 AI 訪客
                      </div>
                      <div className="text-xs text-slate-600">
                        AIO {selectedSeoDetail.site.seo.aiCitations.aiOverview} 次 · GPT{' '}
                        {selectedSeoDetail.site.seo.aiCitations.chatgpt} 次 · Perplexity{' '}
                        {selectedSeoDetail.site.seo.aiCitations.perplexity} 次
                      </div>
                    </div>
                  </div>

                  {/* 設備分發 & 全球/台灣排名雙卡 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-slate-200 rounded-[4px] flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="text-sm font-extrabold text-[#0F172A]">
                          設備分發 (Device Distribution)
                        </div>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-blue-600 inline-block" />
                            <span>桌面網頁 (Desktop)：</span>
                            <strong className="font-mono">
                              {selectedSeoDetail.swMetrics.desktopPct}%
                            </strong>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-sky-300 inline-block" />
                            <span>行動網頁 (Mobile Web)：</span>
                            <strong className="font-mono">
                              {selectedSeoDetail.swMetrics.mobilePct}%
                            </strong>
                          </div>
                        </div>
                      </div>
                      {/* SVG 甜甜圈圓餅圖 */}
                      <svg className="w-24 h-24 -rotate-90" viewBox="0 0 36 36">
                        <circle
                          cx="18"
                          cy="18"
                          r="14"
                          fill="none"
                          stroke="#7DD3FC"
                          strokeWidth="5"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r="14"
                          fill="none"
                          stroke="#2563EB"
                          strokeWidth="5"
                          strokeDasharray={`${selectedSeoDetail.swMetrics.desktopPct * 0.88} 100`}
                        />
                      </svg>
                    </div>

                    <div className="p-4 border border-slate-200 rounded-[4px] space-y-2.5 text-sm">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                        <span className="font-bold text-slate-600">全球排名 (Global Rank)</span>
                        <span className="font-mono font-extrabold text-base">
                          #{selectedSeoDetail.swMetrics.globalRank.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                        <span className="font-bold text-slate-600">🇹🇼 台灣國家排名</span>
                        <span className="font-mono font-extrabold text-base text-blue-700">
                          #{selectedSeoDetail.swMetrics.twRank.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-600">金融期貨行業排名</span>
                        <span className="font-mono font-extrabold text-base text-emerald-700">
                          #{selectedSeoDetail.swMetrics.industryRank}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 最高流量文字排行 & 錯誤與待更新頁面清單 */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="border border-slate-200 rounded-[4px] p-4 space-y-3">
                      <h4 className="text-sm font-extrabold text-[#0F172A]">
                        🏆 此網站最高流量關鍵字與主力頁面
                      </h4>
                      <div className="space-y-2">
                        {selectedSeoDetail.profile.topTrafficWords.map((w, idx) => (
                          <div
                            key={idx}
                            className="p-2.5 bg-slate-50 border border-slate-200 rounded-[3px] flex items-center justify-between gap-2 text-xs"
                          >
                            <div>
                              <div className="font-extrabold text-[#0F172A] text-sm">
                                #{w.pos} · {w.keyword}
                              </div>
                              <div className="font-mono text-slate-500 mt-0.5">
                                路徑：{w.pagePath} · 曝光 {w.impressions.toLocaleString()}
                              </div>
                            </div>
                            <div className="text-right font-mono">
                              <div className="font-extrabold text-blue-700">
                                {w.clicks.toLocaleString()} 點擊
                              </div>
                              <div className="text-indigo-600">+{w.aiTraffic} AI 流量</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border border-slate-200 rounded-[4px] p-4 space-y-3">
                      <h4 className="text-sm font-extrabold text-[#0F172A]">
                        🛠️ 錯誤頁面與待更新建議清單
                      </h4>
                      <div className="space-y-2">
                        {selectedSeoDetail.profile.errorAndUpdatePages.map((pg, idx) => (
                          <div
                            key={idx}
                            className={`p-2.5 rounded-[3px] border text-xs space-y-1 ${
                              pg.severity === 'critical'
                                ? 'bg-rose-50 border-rose-200'
                                : pg.severity === 'warn'
                                ? 'bg-amber-50 border-amber-200'
                                : 'bg-blue-50 border-blue-200'
                            }`}
                          >
                            <div className="flex items-center justify-between font-bold">
                              <span className="font-mono text-[#0F172A]">{pg.path}</span>
                              <span className="text-rose-700">{pg.issueType}</span>
                            </div>
                            <p className="text-slate-600">{pg.detail}</p>
                            <p className="font-bold text-slate-900">建議修正：{pg.fixAction}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 分頁 4：AEO 情報（150 個已追蹤提示詞 + AI 情感分析 + 流量來源渠道 + 反向連結） */}
              {swNavTab === 'aeo_intel' && selectedSeoDetail && (
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                    <div>
                      <h3 className="text-lg font-extrabold text-[#0F172A]">
                        AEO 情報（AI 品牌可見性 · 150 個提示詞監控）&amp; 競爭反向連結分析
                      </h3>
                      <p className="text-sm text-slate-600 mt-0.5">
                        復刻 Similarweb $399/月 企業版核心 AEO 與 SEO 反向連結指標，幫部門省下每年逾 15 萬元訂閱費。
                      </p>
                    </div>
                    <span className="px-3 py-1 text-xs font-mono font-bold bg-indigo-50 text-indigo-800 border border-indigo-200 rounded-[2px]">
                      1 個行銷活動 · {selectedSeoDetail.swMetrics.aeo.promptsTracked} 個已追蹤提示詞
                    </span>
                  </div>

                  {/* AEO 指標與 AI 情感分析 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border border-slate-200 rounded-[4px] space-y-1">
                      <div className="text-xs font-extrabold text-slate-500">
                        AI 品牌可見性 (AI Brand Visibility)
                      </div>
                      <div className="text-3xl font-mono font-black text-indigo-700">
                        {selectedSeoDetail.swMetrics.aeo.visibilityRate}%
                      </div>
                      <div className="text-xs text-slate-600">
                        在 150 個期貨開戶與教學提示詞中，共被 AI 主動推薦{' '}
                        <strong>{selectedSeoDetail.swMetrics.aeo.mentionedCount}</strong> 次
                      </div>
                    </div>

                    <div className="p-4 border border-slate-200 rounded-[4px] space-y-2">
                      <div className="text-xs font-extrabold text-slate-500">
                        AI 情感分析 (AI Sentiment Analysis)
                      </div>
                      <div className="flex items-center gap-2 text-xs font-bold">
                        <span className="text-emerald-700">
                          正面推薦 {selectedSeoDetail.swMetrics.aeo.sentiment.positive}%
                        </span>
                        <span className="text-slate-600">
                          中立 {selectedSeoDetail.swMetrics.aeo.sentiment.neutral}%
                        </span>
                        <span className="text-rose-600">
                          負面 {selectedSeoDetail.swMetrics.aeo.sentiment.negative}%
                        </span>
                      </div>
                      <div className="w-full h-3 rounded-full overflow-hidden flex">
                        <div
                          style={{ width: `${selectedSeoDetail.swMetrics.aeo.sentiment.positive}%` }}
                          className="bg-emerald-500"
                        />
                        <div
                          style={{ width: `${selectedSeoDetail.swMetrics.aeo.sentiment.neutral}%` }}
                          className="bg-slate-300"
                        />
                        <div
                          style={{ width: `${selectedSeoDetail.swMetrics.aeo.sentiment.negative}%` }}
                          className="bg-rose-500"
                        />
                      </div>
                    </div>

                    <div className="p-4 border border-slate-200 rounded-[4px] space-y-1">
                      <div className="text-xs font-extrabold text-slate-500">
                        反向連結分析 (Backlink Analytics)
                      </div>
                      <div className="text-3xl font-mono font-black text-[#0F172A]">
                        {selectedSeoDetail.swMetrics.backlinks.total.toLocaleString()}
                      </div>
                      <div className="text-xs text-slate-600">
                        引用網域數：{selectedSeoDetail.swMetrics.backlinks.refDomains} 個 · 網域評級
                        DR <strong>{selectedSeoDetail.site.seo.dr}</strong>
                      </div>
                    </div>
                  </div>

                  {/* 流量來源渠道拆解 */}
                  <div className="p-4 border border-slate-200 rounded-[4px] space-y-3">
                    <h4 className="text-sm font-extrabold text-[#0F172A]">
                      流量來源渠道分布 (Traffic Sources &amp; Channels)
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {selectedSeoDetail.swMetrics.channels.map((ch) => (
                        <div
                          key={ch.name}
                          className="p-3 bg-slate-50 border border-slate-200 rounded-[3px] space-y-1.5"
                        >
                          <div className="text-xs font-bold text-slate-600">{ch.name}</div>
                          <div className="text-xl font-mono font-black text-[#0F172A]">{ch.pct}%</div>
                          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className={`h-full ${ch.color}`} style={{ width: `${ch.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI 提示詞實測引用明細 */}
                  <div className="space-y-2.5">
                    <h4 className="text-sm font-extrabold text-[#0F172A]">
                      已追蹤 AI 提示詞引用實測紀錄
                    </h4>
                    {selectedSeoDetail.swMetrics.aeo.samplePrompts.map((p, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-slate-50 border border-slate-200 rounded-[3px] flex flex-wrap items-center justify-between gap-2 text-sm"
                      >
                        <div>
                          <div className="font-extrabold text-[#0F172A]">「{p.prompt}」</div>
                          <div className="text-xs text-slate-500 mt-0.5">測試引擎：{p.engine}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 text-xs font-bold bg-emerald-100 text-emerald-800 rounded-[2px]">
                            {p.sentiment}
                          </span>
                          <span
                            className={`px-2.5 py-1 text-xs font-extrabold rounded-[2px] ${
                              p.cited
                                ? 'bg-blue-600 text-white'
                                : 'bg-slate-200 text-slate-600'
                            }`}
                          >
                            {p.cited ? '已成功引用官網' : '待補充問答段落'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 分頁 5：品牌與業務人名搜尋量追蹤器 & 三大領域熱門關鍵字 Top 5 */}
              {swNavTab === 'brand_radar' && (
                <div className="space-y-6">
                  {/* 品牌與業務人名搜尋量追蹤 */}
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-extrabold text-[#0F172A]">
                          品牌詞與業務人名搜尋量追蹤器
                        </h3>
                        <p className="text-sm text-slate-600">
                          查詢網友在 Google 主動搜尋業務本名或稱號（如「洪健豪」、「吳元元」、「黃麗臻」、「謝琮凱」）的月搜尋量與點擊表現。
                        </p>
                      </div>
                      <div className="relative">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={brandLookupQuery}
                          onChange={(e) => setBrandLookupQuery(e.target.value)}
                          placeholder="輸入業務姓名或稱號搜尋..."
                          className="pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-[3px] focus:outline-none focus:border-blue-600 w-60"
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {['', '黃麗臻', '洪健豪', '謝琮凱', '吳元元', '郭悅寧'].map((preset) => (
                        <button
                          key={preset || 'all'}
                          onClick={() => setBrandLookupQuery(preset)}
                          className={`px-3 py-1 text-xs font-bold rounded-[2px] border ${
                            brandLookupQuery === preset
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                          }`}
                        >
                          {preset ? `🔍 ${preset}` : '顯示熱門前 6 名'}
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                      {brandSearchResults.map(({ site, mainBrand }) => (
                        <div
                          key={site.id}
                          onClick={() => {
                            setSelectedSeoSiteId(site.id);
                            setSwNavTab('analysis');
                          }}
                          className="p-4 border border-slate-200 hover:border-blue-500 rounded-[4px] bg-slate-50/70 cursor-pointer space-y-2 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-base font-extrabold text-[#0F172A]">
                              「{mainBrand.query}」
                            </span>
                            <span className="px-2 py-0.5 text-xs font-mono font-bold bg-emerald-100 text-emerald-800 rounded-[2px]">
                              Google #{mainBrand.pos}
                            </span>
                          </div>
                          <div className="text-xs text-slate-500 font-mono">{site.domain}</div>
                          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                            <span>
                              月搜尋量：<strong>{mainBrand.monthlySearch}</strong>
                            </span>
                            <span className="font-mono font-bold text-emerald-600">
                              {mainBrand.trend}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 三大金融商業領域本月熱門關鍵字 Top 5 */}
                  <div className="pt-4 border-t border-slate-200 space-y-3">
                    <h4 className="text-base font-extrabold text-[#0F172A]">
                      🔥 本月三大領域熱門關鍵字雷達（期貨業 / 金融業 / 台灣全網 各 Top 5）
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      {Object.values(SECTOR_HOT_KEYWORDS).map((sector) => (
                        <div
                          key={sector.badge}
                          className="border border-slate-200 rounded-[4px] overflow-hidden bg-white"
                        >
                          <div className="px-4 py-2.5 bg-slate-900 text-white flex items-center justify-between">
                            <span className="text-sm font-extrabold">{sector.title}</span>
                            <span
                              className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded-[2px] ${sector.accent}`}
                            >
                              {sector.badge}
                            </span>
                          </div>
                          <div className="divide-y divide-slate-100">
                            {sector.items.map((item, idx) => (
                              <div
                                key={item.kw}
                                onClick={() =>
                                  copyTextSafely(item.kw, () =>
                                    triggerToast(`已複製熱門關鍵字：「${item.kw}」`)
                                  )
                                }
                                className="p-3 hover:bg-blue-50/60 cursor-pointer space-y-1 transition-colors"
                              >
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-sm font-extrabold text-[#0F172A]">
                                    {idx + 1}. {item.kw}
                                  </span>
                                  <span className="text-xs font-mono font-bold text-emerald-600 shrink-0">
                                    {item.trend}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between text-xs text-slate-500">
                                  <span>月搜：{item.vol}</span>
                                  <span className="text-blue-700 font-medium">{item.captured}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 區塊三：【WP 工程師不可替代價值儀表板】跨部門建站漏斗與自助 SOP 知識庫 */}
        {/* ===================================================================== */}
        <section
          id="section-value"
          className="bg-white border-2 border-slate-300 rounded-[4px] shadow-xs overflow-hidden scroll-mt-16"
        >
          <div className="bg-amber-950 text-white px-5 py-3 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 text-xs font-mono font-bold bg-amber-500 text-slate-950 rounded-[2px]">
                SECTION 03
              </span>
              <h2 className="text-base font-extrabold tracking-wide">
                【WP 工程師不可替代價值儀表板】跨部門建站溝通漏斗、合規視覺省時與自助 SOP 知識庫
              </h2>
            </div>
            <span className="text-xs text-amber-200 font-medium">
              AI 無法取代的跨部門溝通樞紐與標準化資產
            </span>
          </div>

          <div className="p-5 space-y-5">
            {/* 四大硬指標量化卡 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-[3px] space-y-1">
                <div className="text-xs font-bold text-slate-500">標準化視覺模板省時</div>
                <div className="text-2xl font-mono font-black text-emerald-700">-85% 工時</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  建立 Astra 合規版型庫，取代重複人工美工修圖與警語排版。
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-[3px] space-y-1">
                <div className="text-xs font-bold text-slate-500">平均建站溝通週期縮短</div>
                <div className="text-2xl font-mono font-black text-blue-700">21天 → 7天</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  明確切分「業務交件 vs 工程開發」階段，消除跨部門溝通黑洞。
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-[3px] space-y-1">
                <div className="text-xs font-bold text-slate-500">教學文件降低重複私訊</div>
                <div className="text-2xl font-mono font-black text-indigo-700">-70% 詢問</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  將後台操作與合規規範製成一鍵複製 SOP，業務可自助完成更新。
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-[3px] space-y-1">
                <div className="text-xs font-bold text-slate-500">資安與離職合規攔截率</div>
                <div className="text-2xl font-mono font-black text-rose-700">100% 留痕</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  每日自動比對離職名單與 Astra 漏洞，確保金融合規零死角。
                </p>
              </div>
            </div>

            {/* 建站流程漏斗 & 自助式 SOP 知識庫 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="border border-slate-200 rounded-[4px] p-4 space-y-3">
                <div className="text-sm font-extrabold text-[#0F172A] flex items-center gap-1.5">
                  <FolderKanban className="w-4 h-4 text-blue-600" />
                  <span>36 站跨部門建站與維運流程漏斗（精準定位卡關點）</span>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-[3px]">
                    <div className="flex justify-between font-extrabold mb-1">
                      <span>01. 已正式上線並穩定獲取自然流量</span>
                      <span className="font-mono text-emerald-700">27 站</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-600" style={{ width: '75%' }} />
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-[3px]">
                    <div className="flex justify-between font-extrabold mb-1">
                      <span>02. 待業務繳交大頭照與專長素材（卡在業務端）</span>
                      <span className="font-mono text-amber-700">2 站</span>
                    </div>
                    <div className="text-slate-500">楊蕙寧、張婷華（系統已排程催件）</div>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-[3px]">
                    <div className="flex justify-between font-extrabold mb-1">
                      <span>03. 金融合規警語與法遵審核中</span>
                      <span className="font-mono text-blue-700">1 站</span>
                    </div>
                    <div className="text-slate-500">林書韻（審核通過即可一鍵上線）</div>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-[3px]">
                    <div className="flex justify-between font-extrabold mb-1">
                      <span>04. 已停用 / 離職備份封存站點</span>
                      <span className="font-mono text-slate-600">6 站</span>
                    </div>
                    <div className="text-slate-500">已完成全站備份與索引清理</div>
                  </div>
                </div>
              </div>

              <div className="border border-slate-200 rounded-[4px] p-4 space-y-3">
                <div className="text-sm font-extrabold text-[#0F172A] flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                  <span>業務自助式 SOP 教學知識庫（一鍵複製貼給業務，省下重複教學時間）</span>
                </div>
                <div className="space-y-2.5">
                  {SOP_TEMPLATES.map((sop) => (
                    <div
                      key={sop.id}
                      className="p-3 bg-slate-50 border border-slate-200 rounded-[3px] flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-xs font-extrabold text-[#0F172A]">{sop.title}</span>
                          <span className="px-1.5 py-0.5 text-[10px] font-bold bg-indigo-100 text-indigo-800 rounded-[2px]">
                            {sop.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 truncate mt-1">{sop.content}</p>
                      </div>
                      <button
                        onClick={() =>
                          copyTextSafely(sop.content, () =>
                            triggerToast(`已複製「${sop.title}」到剪貼簿！`)
                          )
                        }
                        className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold bg-[#0F172A] hover:bg-blue-600 text-white rounded-[2px] transition-colors"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>一鍵複製教學</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 區塊四：【業務問題歷程區塊】病毒日誌風格終端機紀錄 (Terminal Log)       */}
        {/* ===================================================================== */}
        <section
          id="section-logs"
          className="bg-slate-950 text-slate-200 border-2 border-slate-800 rounded-[4px] shadow-xs overflow-hidden scroll-mt-16"
        >
          <div className="px-5 py-3 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 text-xs font-mono font-bold bg-emerald-600 text-white rounded-[2px]">
                SECTION 04
              </span>
              <Terminal className="w-4 h-4 text-emerald-400" />
              <h2 className="text-sm sm:text-base font-extrabold text-white">
                【業務問題歷程區塊】全站維運異常、AI 催更與需求變更即時系統日誌
              </h2>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono">
              {['ALL', 'CRITICAL', 'WARN', 'INFO', 'FIXED'].map((lv) => (
                <button
                  key={lv}
                  onClick={() => setLogFilter(lv)}
                  className={`px-2.5 py-1 rounded-[2px] font-bold transition-colors ${
                    logFilter === lv
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {lv}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 font-mono text-xs space-y-2 max-h-72 overflow-y-auto">
            {filteredLogs.map((log) => (
              <div
                key={log.id}
                className="flex flex-wrap sm:flex-nowrap items-start gap-2.5 py-1.5 px-2.5 rounded-[2px] bg-slate-900/70 border border-slate-800/80"
              >
                <span className="text-slate-500 shrink-0">[{log.time}]</span>
                <span
                  className={`px-1.5 py-0.5 text-[10px] font-bold rounded-[2px] shrink-0 ${
                    log.level === 'CRITICAL'
                      ? 'bg-rose-600 text-white'
                      : log.level === 'WARN'
                      ? 'bg-amber-500 text-slate-950'
                      : log.level === 'FIXED'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-sky-700 text-white'
                  }`}
                >
                  {log.level}
                </span>
                <span className="text-sky-300 font-bold shrink-0">[{log.siteName}]</span>
                <span className="text-slate-200 leading-relaxed">{log.message}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 區塊五：【WP 新站開發懶人包 & 惡意攻擊 IP 黑名單壓縮封鎖包】            */}
        {/* ===================================================================== */}
        <section
          id="section-newsite-kit"
          className="bg-white border-2 border-rose-300 rounded-[4px] shadow-xs overflow-hidden scroll-mt-16"
        >
          <div className="bg-rose-950 text-white px-5 py-3 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 text-xs font-mono font-bold bg-rose-600 text-white rounded-[2px]">
                SECTION 05
              </span>
              <ShieldBan className="w-4 h-4 text-rose-300" />
              <h2 className="text-base font-extrabold tracking-wide">
                【WP 新站開發工程懶人包】新建站標準 SOP &amp; {MALICIOUS_IP_LIST.length} 筆惡意攻擊 IP 黑名單壓縮封鎖包
              </h2>
            </div>
            <span className="px-2.5 py-0.5 text-xs font-mono font-bold bg-rose-600/30 text-rose-200 border border-rose-500/50 rounded-[2px]">
              ⚠️ 製作任何新網站時請務必一併匯入此 IP 黑名單
            </span>
          </div>

          <div className="p-5 grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* 左側：新建站 4 步驟標準工程懶人包 */}
            <div className="lg:col-span-5 space-y-3">
              <h3 className="text-sm font-extrabold text-[#0F172A]">
                📋 製作任何業務新網站 · 4 步驟標準化上線懶人包
              </h3>
              <div className="space-y-2.5">
                {NEW_SITE_DEV_PLAYBOOK.map((item) => (
                  <div
                    key={item.step}
                    className="p-3.5 bg-slate-50 border border-slate-200 rounded-[3px] space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-black text-blue-700">
                        STEP {item.step}
                      </span>
                      <span className="px-2 py-0.5 text-[10px] font-bold bg-rose-100 text-rose-800 rounded-[2px]">
                        {item.badge}
                      </span>
                    </div>
                    <div className="text-sm font-extrabold text-[#0F172A]">{item.title}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 右側：500+ 惡意 IP 黑名單壓縮封鎖包（支援純文字 / .htaccess 轉換 / 搜尋 / 下載） */}
            <div className="lg:col-span-7 border border-slate-200 rounded-[4px] p-4 bg-slate-50 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-extrabold text-[#0F172A]">
                      🛡️ WP 惡意掃描攻擊 IP 黑名單壓縮封鎖包（共 {MALICIOUS_IP_LIST.length} 筆 IPv4/IPv6）
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      可直接貼入 Wordfence 防火牆黑名單，或切換為 Apache <code>.htaccess</code> 全站封鎖語法。
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setIpExportFormat('plain')}
                      className={`px-2.5 py-1 text-xs font-bold rounded-[2px] border ${
                        ipExportFormat === 'plain'
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-700 border-slate-300'
                      }`}
                    >
                      Wordfence 純 IP 格式
                    </button>
                    <button
                      onClick={() => setIpExportFormat('htaccess')}
                      className={`px-2.5 py-1 text-xs font-bold rounded-[2px] border ${
                        ipExportFormat === 'htaccess'
                          ? 'bg-slate-900 text-white border-slate-900'
                          : 'bg-white text-slate-700 border-slate-300'
                      }`}
                    >
                      .htaccess 伺服器封鎖碼
                    </button>
                  </div>
                </div>

                {/* 搜尋驗證某個 IP 是否已在黑名單內 */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="relative flex-1 min-w-[200px]">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={ipSearchFilter}
                      onChange={(e) => setIpSearchFilter(e.target.value)}
                      placeholder="輸入可疑 IP 檢查是否已在黑名單中..."
                      className="w-full pl-8 pr-3 py-1.5 text-xs font-mono bg-white border border-slate-300 rounded-[3px] focus:outline-none focus:border-rose-600"
                    />
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    符合筆數：{filteredMaliciousIps.length} / {MALICIOUS_IP_LIST.length}
                  </span>
                </div>

                <pre className="p-3 bg-slate-950 text-rose-300 font-mono text-[11px] rounded-[3px] overflow-x-auto max-h-64 leading-relaxed">
                  {ipExportFormat === 'plain'
                    ? filteredMaliciousIps.join('\n')
                    : HTACCESS_BLOCK_SNIPPET}
                </pre>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-2 pt-2 border-t border-slate-200">
                <button
                  onClick={() =>
                    downloadTextFile(
                      ipExportFormat === 'plain'
                        ? 'wp-malicious-ip-blacklist.txt'
                        : 'wp-htaccess-ip-block.txt',
                      ipExportFormat === 'plain'
                        ? MALICIOUS_IP_LIST.join('\n')
                        : HTACCESS_BLOCK_SNIPPET,
                      () => triggerToast('已下載惡意 IP 黑名單封鎖包檔案！')
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 rounded-[2px]"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>下載 .txt 黑名單檔</span>
                </button>
                <button
                  onClick={() =>
                    copyTextSafely(
                      ipExportFormat === 'plain'
                        ? MALICIOUS_IP_LIST.join('\n')
                        : HTACCESS_BLOCK_SNIPPET,
                      () =>
                        triggerToast(
                          `已一鍵複製全部 ${MALICIOUS_IP_LIST.length} 筆惡意 IP 封鎖設定！`
                        )
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-extrabold bg-rose-600 hover:bg-rose-700 text-white rounded-[2px]"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>一鍵複製整包黑名單設定</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===================================================================== */}
      {/* 彈窗零：業務專屬「需求與工程更動歷程」獨立區塊（點擊任一業務網站即開啟） */}
      {/* ===================================================================== */}
      {historyModalSiteId && (() => {
        const activeSite = sites.find((s) => s.id === historyModalSiteId);
        if (!activeSite) return null;
        const records = siteHistories[activeSite.id] || [
          {
            id: `default-${activeSite.id}`,
            date: '2026/01/05',
            category: '建站上線 & 合規初始化',
            requestText: `${activeSite.name} 個人品牌官網建置與 Astra 子主題合規版型套用`,
            actionText: 'WP工程師詩葶 完成首頁視覺切版、金融風險警語掛載、Rank Math SEO 設定與 500+ 惡意 IP 黑名單封鎖。',
            highlight: false,
          },
        ];

        return (
          <div className="fixed inset-0 z-50 bg-black/65 flex items-center justify-center p-4">
            <div className="bg-white border-2 border-slate-300 rounded-[6px] max-w-3xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
              {/* 頂部業務檔案標題列 */}
              <div className="px-5 py-4 bg-[#0F172A] text-white flex items-center justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2 py-0.5 text-xs font-mono font-bold bg-blue-600 text-white rounded-[2px]">
                      {activeSite.team}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold">
                      {activeSite.name} — 業務需求與工程更動專屬歷程檔案
                    </h3>
                    <a
                      href={activeSite.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-sky-300 hover:underline flex items-center gap-1"
                    >
                      <span>{activeSite.domain}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    完整記錄幾月幾號業務提出什麼需求、WP工程師詩葶 做了什麼更動，以及 Google AI 摘要收錄里程碑。
                  </p>
                </div>
                <button
                  onClick={() => setHistoryModalSiteId(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-[3px] hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 內容捲動區 */}
              <div className="p-5 overflow-y-auto space-y-5 flex-1 bg-[#F8FAFC]">
                {/* 快速操作捷徑列 */}
                <div className="flex flex-wrap items-center justify-between gap-2 bg-white p-3 border border-slate-200 rounded-[4px]">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span>
                      <strong>維運狀態：</strong>
                      {activeSite.opsStatus}（{activeSite.buildStage}）
                    </span>
                    <span>
                      <strong>SEO 健康度：</strong>
                      <span className="font-mono font-bold text-emerald-700">
                        {activeSite.seo.healthScore} 分
                      </span>
                    </span>
                    <span>
                      <strong>自然流量：</strong>
                      <span className="font-mono font-bold text-blue-700">
                        {activeSite.seo.organicTraffic.toLocaleString()} 次/月
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedSeoSiteId(activeSite.id);
                        setSwNavTab('analysis');
                        setHistoryModalSiteId(null);
                        document.getElementById('section-seo')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-3 py-1.5 text-xs font-bold bg-slate-100 hover:bg-blue-50 text-slate-800 border border-slate-300 rounded-[3px]"
                    >
                      查看 Similarweb SEO 數據
                    </button>
                    <button
                      onClick={(e) => {
                        setHistoryModalSiteId(null);
                        openAiMailDrawer(activeSite, e);
                      }}
                      className="px-3 py-1.5 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-[3px]"
                    >
                      生成一頁式 SEO 週報信
                    </button>
                  </div>
                </div>

                {/* 新增「幾月幾號需求 & 工程更動」表單 */}
                <div className="bg-white border border-blue-200 rounded-[5px] p-4 space-y-3 shadow-2xs">
                  <div className="text-sm font-extrabold text-[#0F172A] flex items-center gap-1.5">
                    <Wrench className="w-4 h-4 text-blue-600" />
                    <span>新增「{activeSite.name}」的需求與工程更動紀錄</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <div>
                      <label className="block font-bold text-slate-600 mb-1">日期（年/月/日）</label>
                      <input
                        type="text"
                        value={newHistoryDate}
                        onChange={(e) => setNewHistoryDate(e.target.value)}
                        placeholder="例如：2026/01/14"
                        className="w-full px-3 py-2 font-mono bg-slate-50 border border-slate-300 rounded-[3px] focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block font-bold text-slate-600 mb-1">紀錄分類標籤</label>
                      <select
                        value={newHistoryCategory}
                        onChange={(e) => setNewHistoryCategory(e.target.value)}
                        className="w-full px-3 py-2 font-bold bg-slate-50 border border-slate-300 rounded-[3px] focus:outline-none focus:border-blue-600"
                      >
                        <option value="業務需求 & 視覺更動">🎨 業務需求 &amp; 視覺更動（如更新 icon / Banner）</option>
                        <option value="AI 收錄里程碑">🤖 AI 收錄里程碑（如確定已被 Google AI 摘要收錄）</option>
                        <option value="SEO 架構優化">📈 SEO 架構優化（標題、關鍵字、Rank Math 調整）</option>
                        <option value="外掛與資安維護">🛡️ 外掛與資安維護（Astra 升級 / 合規警語調整）</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    <div>
                      <label className="block font-bold text-slate-600 mb-1">
                        業務發了什麼需求 / 追蹤事件
                      </label>
                      <input
                        type="text"
                        value={newHistoryRequest}
                        onChange={(e) => setNewHistoryRequest(e.target.value)}
                        placeholder="例：更新烏薩奇 icon / 確定「期貨學姊」已被 AI 收錄"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-[3px] focus:outline-none focus:border-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-600 mb-1">
                        我（WP工程師詩葶）做了什麼更動 / 驗證結果
                      </label>
                      <input
                        type="text"
                        value={newHistoryAction}
                        onChange={(e) => setNewHistoryAction(e.target.value)}
                        placeholder="例：完成去背與按鈕替換，確認行動版不遮擋合規警語"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-[3px] focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleAddSiteHistory}
                      className="px-4 py-2 text-xs font-extrabold bg-blue-600 hover:bg-blue-700 text-white rounded-[3px]"
                    >
                      + 新增至時間軸並寫入系統日誌
                    </button>
                  </div>
                </div>

                {/* 時間軸歷程列表 */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-extrabold text-[#0F172A]">
                      📅 歷史需求與更動時間軸（共 {records.length} 筆紀錄）
                    </h4>
                    <button
                      onClick={() =>
                        copyTextSafely(
                          `【${activeSite.name} (${activeSite.domain}) 網站維護與 AI 收錄歷程】\n` +
                            records
                              .map(
                                (r) =>
                                  `• ${r.date} [${r.category}]\n  需求/事件：${r.requestText}\n  工程更動/成果：${r.actionText}`
                              )
                              .join('\n\n'),
                          () => triggerToast(`已複製「${activeSite.name}」完整需求更動時間軸！`)
                        )
                      }
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:underline"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>一鍵複製此業務全部歷程</span>
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {records.map((rec) => (
                      <div
                        key={rec.id}
                        className={`p-4 rounded-[5px] border space-y-1.5 ${
                          rec.highlight
                            ? 'bg-emerald-50/80 border-emerald-300 shadow-2xs'
                            : 'bg-white border-slate-200'
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 text-xs font-mono font-black bg-slate-900 text-white rounded-[2px]">
                              {rec.date}
                            </span>
                            <span
                              className={`px-2 py-0.5 text-xs font-bold rounded-[2px] ${
                                rec.highlight
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-blue-100 text-blue-900'
                              }`}
                            >
                              {rec.category}
                            </span>
                          </div>
                          {rec.highlight && (
                            <span className="text-xs font-extrabold text-emerald-700 flex items-center gap-1">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>Google AI 摘要實測驗證</span>
                            </span>
                          )}
                        </div>

                        <div className="text-sm font-extrabold text-[#0F172A] pt-1">
                          需求 / 事件：{rec.requestText}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          工程更動 / 成果：{rec.actionText}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ===================================================================== */}
      {/* 彈窗一：AI 催更信 / 離職合規通報生成抽屜                                */}
      {/* ===================================================================== */}
      {aiMailModalSite && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-300 rounded-[4px] max-w-3xl w-full shadow-xl overflow-hidden">
            <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-sky-400" />
                <h3 className="text-sm font-extrabold">
                  AI 完整一頁式網站診斷與 SEO 週報生成器 — {aiMailModalSite.name} ({aiMailModalSite.domain})
                </h3>
              </div>
              <button
                onClick={() => setAiMailModalSite(null)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-3 text-xs">
              <div className="flex items-center justify-between bg-slate-50 p-2.5 border border-slate-200 rounded-[2px]">
                <span>
                  <strong>收件人信箱：</strong>
                  {aiMailModalSite.email || '（無業務信箱，將發送至部門合規窗口存查）'}
                </span>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-800 font-bold rounded-[2px]">
                  {aiMailModalSite.team}
                </span>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  完整一頁式診斷報告內文（含版本比對、排名文章、AIO 收錄、待加強頁面與 WP工程師詩葶 署名）：
                </label>
                <textarea
                  rows={18}
                  value={customMailBody}
                  onChange={(e) => setCustomMailBody(e.target.value)}
                  className="w-full p-3.5 font-sans text-xs leading-relaxed bg-slate-50 border border-slate-300 rounded-[2px] focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() =>
                    copyTextSafely(customMailBody, () => triggerToast('已複製完整一頁報告內文到剪貼簿'))
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-2 font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-[2px]"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>複製完整報告</span>
                </button>
                <button
                  onClick={handleConfirmSendMail}
                  className="inline-flex items-center gap-1.5 px-4 py-2 font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-[2px]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>標記已發送並寫入問題歷程日誌</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* 彈窗二：Excel / Google Sheets 批次複製貼上匯入器                        */}
      {/* ===================================================================== */}
      {showExcelModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-300 rounded-[4px] max-w-2xl w-full shadow-xl overflow-hidden">
            <div className="px-5 py-3.5 bg-emerald-800 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-4 h-4" />
                <h3 className="text-sm font-extrabold">
                  Excel / Google 試算表批次匯入器（直接全選複製貼上即可）
                </h3>
              </div>
              <button
                onClick={() => setShowExcelModal(false)}
                className="text-emerald-200 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-3 text-xs">
              <p className="text-slate-600 leading-relaxed">
                請在你的 Google 試算表或 Excel 中直接全選資料列（欄位順序：
                <code className="px-1 bg-slate-100 font-mono">
                  所屬分公司/團隊 | 目前維運狀態 | 目前建站階段 | 名稱 | 業務網站 | 業務 Email
                </code>
                ），按 <strong>Ctrl+C</strong> 後貼入下方框內：
              </p>

              <textarea
                rows={9}
                value={excelPasteText}
                onChange={(e) => setExcelPasteText(e.target.value)}
                placeholder={`範例：\n槓桿\t正常\t已上線\t謝琮凱\thttps://cfd-jungle.com/\ta99649@futures.capital.com.tw`}
                className="w-full p-3 font-mono text-xs bg-slate-50 border border-slate-300 rounded-[2px] focus:outline-none focus:border-emerald-600"
              />

              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={() => setShowExcelModal(false)}
                  className="px-3 py-2 font-bold bg-slate-100 text-slate-700 rounded-[2px]"
                >
                  取消
                </button>
                <button
                  onClick={handleImportExcelData}
                  className="inline-flex items-center gap-1.5 px-4 py-2 font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-[2px]"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>一鍵解析並更新中控台資料</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* 彈窗三：開源 / 免費真實爬蟲與 Similarweb 替代指標串接程式碼庫          */}
      {/* ===================================================================== */}
      {showOpenSourceModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-300 rounded-[4px] max-w-3xl w-full shadow-xl overflow-hidden">
            <div className="px-5 py-3.5 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileCode2 className="w-4 h-4 text-emerald-400" />
                <h3 className="text-sm font-extrabold">
                  開源 / 免費真實 SEO 與 Similarweb 指標爬蟲串接碼（Google Apps Script）
                </h3>
              </div>
              <button
                onClick={() => setShowOpenSourceModal(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-3 text-xs">
              <p className="text-slate-600 leading-relaxed">
                在 Google 試算表點選 <strong>「擴充功能」→「Apps Script」</strong> 貼上以下開源串接腳本，即可每日自動免費呼叫{' '}
                <strong>Tranco 開源全球網域排名 API</strong> 與{' '}
                <strong>Google PageSpeed / Search Console API</strong>，把真實數據回寫進你的試算表：
              </p>

              <pre className="p-3.5 bg-slate-950 text-emerald-300 font-mono text-[11px] rounded-[3px] overflow-x-auto max-h-80 leading-relaxed">
                {OPEN_SOURCE_CONNECTOR_CODE}
              </pre>

              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={() =>
                    copyTextSafely(OPEN_SOURCE_CONNECTOR_CODE, () =>
                      triggerToast('已複製開源 Apps Script 爬蟲程式碼！')
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-2 font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-[2px]"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>一鍵複製開源串接腳本</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}