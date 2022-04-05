import random
import numpy as np
from scipy import rand
# import matplotlib.pyplot as plt


def hist_():
    num_curves = random.randint(2,5)
    all_curves = []
    resolution = int(70/num_curves)
    for i in range(num_curves):
        all_curves+=curve(resolution)
    
    all_curves = np.array(all_curves)
    all_curves = 3.5*(all_curves - (all_curves.min()-.25))/all_curves.max()
    # print(all_curves.min())
    # print(all_curves.max())
    # print(all_curves)
    return all_curves

    # bars = curve(100)
    # # print(bars)
    # return 10*(bars - bars.min())/bars.max()


def curve(resolution):
    sigma = random.uniform(0.5,4)
    sample = np.random.normal(0, sigma, resolution)
    # print(sample)
    sample_neg = []
    sample_pos = []
    for i in sample:
        if(i<0): sample_neg.append(i)
        else: sample_pos.append(i)

    sample_neg = np.sort(np.array(sample_neg))
    sample_pos = np.sort(np.array(sample_pos))

    # print('POSITIVE: ', sample_pos, '\n')
    # print('NEGATIVE: ', sample_neg, '\n')
    # print('ADDING HERE', sample_neg + sample_pos)

    arr = np.append(sample_pos, abs(sample_neg))
    return list(arr)

hist_()

# print(hist_())
