import random
import numpy as np
# from scipy import rand

def hist_():
    num_curves = random.randint(2,8)
    all_curves = []
    resolution = int(75/num_curves)
    for i in range(num_curves):
        all_curves+=curve_smart(resolution)
    
    all_curves = np.array(all_curves)
    all_curves = 3.5*(all_curves - (all_curves.min()-.25))/all_curves.max()
    return all_curves

def curve_smart(resolution):
    sigma = random.uniform(0.5,4)
    sample_neg =  - abs(np.random.normal(0, sigma, int(resolution/2)))
    sample_pos =  abs(np.random.normal(0, sigma, int(resolution/2)))

    sample_neg = np.sort(np.array(sample_neg))
    sample_pos = np.sort(np.array(sample_pos))

    # print('POSITIVE: ', sample_pos, '\n')
    # print('NEGATIVE: ', sample_neg, '\n')
    # print('ADDING HERE', sample_neg + sample_pos)

    arr = np.append(sample_pos, abs(sample_neg))
    return list(arr)

# hist_()

# print(hist_())
