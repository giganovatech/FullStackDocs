# pylint: disable=E0401:import-error,C0301:line-too-long,C0103:invalid-name


"""
Beautiful soup example code.
"""


# Import Python standard library modules.
import sys


# Import third party modules.
from bs4 import BeautifulSoup
import requests


# Get web page.
url = 'https://www.perfectgame.org/Schedule/?ty=Myw2LDcsMTIsMTMsMTQ=&fg=MSwyLDM=&dt=MA==&cl=MA==&dv=MA==&st=S1M=&cid=MQ==&sp=OC8xLzIwMjQgMTI6MDA6MDAgQU0=&ep=OC8zMS8yMDI0IDEyOjAwOjAwIEFN&tm=OA==&sr=MA==&uz=&mr=MjAwMDA=&la=&lo=&gy=MA=='
response = requests.get(url, timeout=30)


# Create beautiful soup object.
html_soup = BeautifulSoup(response.text, 'html.parser')


# Find all tr elements.
tr_rg_row_list = html_soup.find_all('tr', class_='rgRow')
tr_rg_alt_row_list = html_soup.find_all('tr', class_='rgAltRow')


for tr_rg_row in tr_rg_row_list:
    print(f'tr_rg_row: {tr_rg_row}')
    break


sys.exit()
