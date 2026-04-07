from scapy.all import *
import base64

filename = "trafic_suspect.pcap"
client_ip = "192.168.1.15"
flag_encoded = base64.b64encode(b"CTF{NETWORK_SNIFFER_MODE}").decode()

packets = []

packets.append(IP(src=client_ip, dst=server_ip)/TCP(sport=44312, dport=80, flags="S", seq=1000))
packets.append(IP(src=server_ip, dst=client_ip)/TCP(sport=80, dport=44312, flags="SA", seq=2000, ack=1001))
packets.append(IP(src=client_ip, dst=server_ip)/TCP(sport=44312, dport=80, flags="A", seq=1001, ack=2001))

http_request = (
    f"GET /login.php?session_token={flag_encoded} HTTP/1.1\r\n"
    f"Host: {server_ip}\r\n"
    "User-Agent: Mozilla/5.0\r\n"
    "Accept: */*\r\n\r\n"
)
packets.append(IP(src=client_ip, dst=server_ip)/TCP(sport=44312, dport=80, flags="PA", seq=1001, ack=2001)/Raw(load=http_request))

http_response = (
    "HTTP/1.1 200 OK\r\n"
    "Content-Type: text/html\r\n"
    "Content-Length: 13\r\n\r\n"
    "<html></html>"
)
packets.append(IP(src=server_ip, dst=client_ip)/TCP(sport=80, dport=44312, flags="PA", seq=2001, ack=1001 + len(http_request))/Raw(load=http_response))

packets.append(IP(src=client_ip, dst=server_ip)/TCP(sport=44312, dport=80, flags="FA", seq=1001 + len(http_request), ack=2001 + len(http_response)))

wrpcap(filename, packets)
